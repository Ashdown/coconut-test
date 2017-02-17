require 'sinatra'
require 'slim'

set :haml, :format => :html5

get '/' do
  slim :index
  erb :prototype
end