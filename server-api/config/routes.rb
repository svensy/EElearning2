Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  namespace :api, defaults: {format: 'json'} do
    scope :v1 do 
      resources :users, except: [:new, :edit] 
      resources :subjects, except: [:new, :edit] do
        resources :quizzes, except: [:new, :edit] do
          resources :questions, except: [:new, :edit] 
        end
      end

      match '/auth/register',     to: 'auth#register',     via: 'post'
      match '/auth/login',        to: 'auth#login',        via: 'post'
      match '/auth/token_status', to: 'auth#token_status', via: 'get'
      
    end
  end
end
