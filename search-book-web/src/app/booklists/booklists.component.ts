import { Component, OnInit } from '@angular/core';
import { BooklistDataService } from '../booklistData.service';

@Component({
  selector: 'app-booklists',
  templateUrl: './booklists.component.html',
  styleUrls: ['./booklists.component.scss']
})
export class BooklistsComponent implements OnInit {

  booklist$ :any;

  constructor(private BooklistDataService: BooklistDataService) { }

  ngOnInit(): void {
      this.booklist$ = this.BooklistDataService.booklist$;
  }


  addToWish(id: string){
    this.BooklistDataService.addWishList(id)
  }

}
