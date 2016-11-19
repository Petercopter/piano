class KeysController < ApplicationController

  def index
    @keys = Key.all
    render json: @keys
  end
end
