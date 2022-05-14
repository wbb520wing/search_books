import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklistDataService {

  private baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  private booklist: any[] = [];
  private bookSubject$ = new Subject();
  booklist$ = this.bookSubject$.asObservable();
  private wishlist: any[] = [];
  private wishlistSubject$ = new Subject();
  wishlist$ = this.wishlistSubject$.asObservable();


  constructor(private http: HttpClient) { }


  getBookList(keyworkd:string){
    this.http.get([this.baseUrl,keyworkd].join('')).pipe(
      map((book:any) => {
        const arr = book.items.map((obj: any) => {
          return {
            id: obj.id,
            bookname: obj.volumeInfo.title,
            publisher: obj.volumeInfo.publisher,
            publishedDate: obj.volumeInfo.publishedDate,
            description: obj.volumeInfo.description,
            bookimage: obj.volumeInfo.imageLinks.smallThumbnail
          }
        });
        return arr;
      }),
      tap((booklist) => {
        this.booklist = [...booklist];
        this.bookSubject$.next(this.booklist)
      })
    ).subscribe()
  }



  addWishList(id: string){
    const book = this.booklist.find((book) => book.id === id);
    const bookInwish = this.wishlist.find((book) => book.id === id);

    if(!book || bookInwish){
      alert('This book has been in your wishlist');
      return;
    }
    this.wishlist = [...this.wishlist, book];
    this.wishlistSubject$.next(this.wishlist)
  }



  moveFromList(id: string){
    const movebook = this.wishlist.find((book) => book.id === id);
    this.wishlist = this.wishlist.filter((book) => book !== movebook);
    this.wishlistSubject$.next(this.wishlist)
  }

}
