class ScalesController < ApplicationController
  before_action :set_scale, only: [:show, :edit, :update, :destroy]

  # GET /scales
  # GET /scales.json
  def index
    @scales = Scale.all.joins(:pitches).order('pitches.id', :category).distinct

    respond_to do |format|
      format.html {}
      format.json { render json: @scales }
    end
  end

  # GET /scales/1
  # GET /scales/1.json
  def show
    render json: @scale
  end

  # GET /scales/new
  def new
    @scale = Scale.new
    8.times { @scale.piano_keys_groups.build }
  end

  # GET /scales/1/edit
  def edit
  end

  # POST /scales
  # POST /scales.json
  def create
    @scale = Scale.new(scale_params)

    respond_to do |format|
      if @scale.save
        format.html { redirect_to scales_path, notice: 'Scale was successfully created.' }
        format.json { render :show, status: :created, location: @scale }
      else
        format.html { render :new }
        format.json { render json: @scale.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /scales/1
  # PATCH/PUT /scales/1.json
  def update
    respond_to do |format|
      if @scale.update(scale_params)
        format.html { redirect_to scales_path, notice: 'Scale was successfully updated.' }
        format.json { render :show, status: :ok, location: @scale }
      else
        format.html { render :edit }
        format.json { render json: @scale.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /scales/1
  # DELETE /scales/1.json
  def destroy
    @scale.destroy
    respond_to do |format|
      format.html { redirect_to scales_url, notice: 'Scale was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_scale
    @scale = Scale.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def scale_params
    params.fetch(:scale, {}).permit(:pitch_id, :category, { piano_keys_groups_attributes: [:_destroy, :finger_left, :finger_right, :id, :piano_key_id, :pitch_id] })
  end
end
