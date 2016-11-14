class KeysController < ApplicationController

  def index
    @keys = Key.all
    respond_to do |format|
      format.json { render json: @keys }
    end
  end
end
