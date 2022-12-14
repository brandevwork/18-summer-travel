Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :families
      resources :family_members
      resources :responses
      get 'settings/family', to: 'settings#family'
      delete 'settings/reset_survey', to: 'settings#reset_family_survey'
    end
  end

  get 'families/index'
  devise_for :families, skip: [:sessions],
    controllers: {
      registrations: 'families/registrations'
    }

  namespace :families do
    devise_scope :family do
      post '/sign_in', to: 'sessions#create'
      delete '/sign_out', to: 'sessions#destroy'
    end
  end

end
