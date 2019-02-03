class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  # GET /books
  def index
    @books = Book.all

    render json: @books
  end

  # GET /books/1
  def show
    render json: @book
  end

  def nyt_bestseller
    @books = get_nyt_bestseller

    render json: @books
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
      if @book.destroy
        head :no_content, status: :ok
      else
        render json: @book.errors, status: :unprocessable_entity
      end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.require(:book).permit(:title, :author, :description, :image_url)
    end

    def get_nyt_bestseller
      response = RestClient::Request.execute(
        :method => "get",
        :url => "https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json?api-key="+ENV['API_KEY']
      )
      data = JSON.parse(response)
    end

end
