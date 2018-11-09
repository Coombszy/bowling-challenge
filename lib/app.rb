require 'sinatra/base'
require 'shotgun'

class App < Sinatra::Base
  enable :sessions, :method_override

  get '/' do
    if session[:ingame] == nil
      redirect '/setup'
    else
      puts session[:players]
      erb(:index)
    end
  end

  get '/setup' do
    erb(:setup)
  end

  post '/setup' do
    session.clear
    if params[:players] != nil
      session[:players] = params[:players]
      session[:ingame] = true
    end
    redirect '/'
  end

  get '/reset' do
    session[:ingame] = nil
    session.clear
    redirect '/'
  end
end