class PlantsController < ApplicationController
  def index
    @plants = Plant.all
    if @plants.empty?
      render json: { status: 500, errors: ['no plants found'] }
    else
      render json: { plants: @plants }
    end
  end
end
