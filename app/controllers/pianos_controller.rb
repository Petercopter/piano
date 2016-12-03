class PianosController < ApplicationController
  def index
    @pitch = Pitch.find_by name: 'C'
  end
end
