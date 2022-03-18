class LocationsController < ApplicationController
    def index
        render json: Location.all,  status: :ok
      end
      
      def show
        location = Location.find(params[:id])
        render json: location, status: :ok
      end
    
      def update
        location = Location.find(params[:id])
        location.update!(location_params)
        render json: location, status: :ok
      end
    
      def create
        location = Location.create!(location_params)
        render json: location, status: :created
      end
    
      def destroy
        location = Location.find(params[:id])
        location.destroy
        head :no_content
      end
    
      private
        def location_params
            params.permit(:location, :loc_description)
        end

end
