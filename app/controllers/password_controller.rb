class PasswordController < ApplicationController
    skip_before_action :authorize, only: :reset
    
    def reset
        user = User.find_by(email: params[:email])
        if user
            user.reset_password!(params[:password])
            render json: user, status: :ok
        else
            render json: {error: "Email not Found"}, status: :not_found
        end
    end
end
