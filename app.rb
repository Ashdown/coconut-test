require 'sinatra'
require 'sinatra/activerecord'
require 'slim'

set :haml, :format => :html5

# helpers SampleHelper, DateHelper, EchoHelper

get '/' do
  slim :index
end