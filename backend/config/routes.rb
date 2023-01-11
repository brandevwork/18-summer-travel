Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :families
      resources :family_members
      resources :member_preferences, only: [:create]
      get 'settings/family', to: 'settings#family'
      delete 'settings/reset_survey', to: 'settings#reset_family_survey'
      get '/results', to: 'survey_results#result'
      get 'recomendation/', to: 'recomendations#recomendation'
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
