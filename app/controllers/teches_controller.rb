class TechesController < ApplicationController
    def index
        render json: Tech.all,  status: :ok
      end
      
      def show
        tech = Tech.find(params[:id])
        render json: tech, status: :ok
      end
    
      def update
        tech = Tech.find(params[:id])
        tech.update!(tech_params)
        render json: tech, status: :ok
      end
    
      def create
        tech = Tech.create!(tech_params)
        render json: tech, status: :created
      end
    
      def destroy
        tech = Tech.find(params[:id])
        tech.destroy
        head :no_content
      end
    
      private
        def tech_params
            params.permit(:handholds, :hold_description)
        end
end
