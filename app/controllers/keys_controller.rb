class KeysController < ApplicationController

  def index
    @keys = Key.all
    render json: @keys
  end

  def show
    @key = Key.find params[:id]
    render json: @key
  end
end
