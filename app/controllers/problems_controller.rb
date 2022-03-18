class ProblemsController < ApplicationController
    def index
        render json: Problem.all,  status: :ok
      end
      
      def show
        problem = Problem.find(params[:id])
        render json: problem, status: :ok
      end
    
      def update
        problem = Problem.find(params[:id])
        problem.update!(problem_params)
        render json: problem, status: :ok
      end
    
      def create
        problem = Problem.create!(problem_params)
        render json: problem, status: :created
      end
    
      def destroy
        problem = Problem.find(params[:id])
        problem.destroy
        head :no_content
      end
    
      private
        def problem_params
            params.permit(:tech_id, :location_id, :grip_color, :end_date, :problem_description, :difficulty, :rating)
        end
end
