module PianoKeys
  class ScalesController < ApplicationController

    def show
      @scale = Scale.find(params[:id])
      respond_to do |format|
        format.json { render json: @scale }
      end
    end
  end
end
