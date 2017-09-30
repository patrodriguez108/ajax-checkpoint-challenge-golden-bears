get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new
  if request.xhr?
    erb :"/horses/_horse", layout: false
  else
    erb :"/horses/new"
  end
end

post '/horses' do
  @horse = Horse.new(params[:horse])
  if request.xhr?

  else
    if @horse.save
      redirect "/horses/#{@horse.id}"
    else
      erb :"/horses/new"
    end
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  if request.xhr?
    erb :"/horses/_stable_horse", layout: false
  else
    erb :"/horses/show"
  end
end
