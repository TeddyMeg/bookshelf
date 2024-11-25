export interface Book {
    _id?: string;
    title: string;
    author: string;
    isbn: string;
    imageUrl: string;
    description: string;
    price: number;
    publishedYear: number;
    isFavorite?: boolean;
  }
  
  export interface BookState {
    books: Book[];
    favorites: Book[];
    loading: boolean;
    error: string | null;
  }