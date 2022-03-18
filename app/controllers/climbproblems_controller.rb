class ClimbproblemsController < ApplicationController

    def index
        render json: Climbproblem.all,  status: :ok
      end
      
      def show
        climbproblem = Climbproblem.find(params[:id])
        render json: climbproblem, status: :ok
      end
    
      def update
        climbproblem = Climbproblem.find(params[:id])
        Climbproblem.update!(climbproblem_params)
        render json: climbproblem, status: :ok
      end
    
      def create
        climbproblem = Climbproblem.create!(climbproblem_params)
        render json: climbproblem, status: :created
      end
    
      def destroy
        climbproblem = Climbproblem.find(params[:id])
        climbproblem.destroy
        head :no_content
      end
    
      private
        def climbproblem_params
            params.permit(:user_id, :problem_id, :favorite, :in_progress, :feedback, :rating)
        end
end
