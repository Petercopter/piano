class PianosController < ApplicationController
  def index
    @note = Note.find_by name: 'C'
  end
end
