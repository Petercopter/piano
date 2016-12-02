class PianoKeysController < ApplicationController

  def index
    @piano_keys = PianoKey.all
    render json: @piano_keys
  end

  def show
    @piano_key = PianoKey.find params[:id]
    render json: @piano_key
  end
end
