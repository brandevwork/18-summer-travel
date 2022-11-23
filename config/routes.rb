Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :families
      resources :family_members

      devise_for :families, path: '', path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'signup'
      },
      controllers: {
        sessions: 'families/sessions',
        registrations: 'families/registrations'
      }

    end
  end
end
