class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  # GET /bookks
  def index
    @books = Book.all

    render json: @books
  end

  # GET /bookks/1
  def show
    render json: @book
  end

  # POST /bookks
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookks/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookks/1
  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bookk
      @book = Book.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.require(:book).permit(:title, :author, :description, :image_url)
    end
end
