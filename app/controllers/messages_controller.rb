class MessagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_group, only: [:index, :create]

  def index
    @message = Message.new
    @group = Group.find(params[:group_id])
    @messages = @group.messages.order(created_at: :DESC).includes(:user)
    respond_to do |format|
      format.html
      format.json
    # @messages = @group.messages.includes(:user)
    # respond_to do |format|
    #   format.html
    #   format.json {@new_messages = @messages.where('id > ?', params[:message][:id])}
    end
  end

  def create
    @message = @group.messages.new(message_params)

    if @message.save

  # require 'byebug'; byebug
      respond_to do |format|
        format.html { redirect_to group_messages_path(@group) }
        format.json
      end
    else
      @message = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
