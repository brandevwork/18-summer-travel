Rails.application.routes.draw do
  get 'families/index'
  devise_for :families, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'families/sessions',
    registrations: 'families/registrations'
  }

  get '/families', to: 'families#index'
end
