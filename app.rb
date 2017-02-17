require 'sinatra'
require 'sinatra/activerecord'
require 'slim'

set :haml, :format => :html5

get '/' do
  slim :index
end