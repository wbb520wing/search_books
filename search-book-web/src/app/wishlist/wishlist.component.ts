import { Component, OnInit } from '@angular/core';
import { BooklistDataService } from '../booklistData.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist: any = [];

  constructor(private BooklistDataService: BooklistDataService) { }

  ngOnInit(): void {
    this.BooklistDataService.wishlist$.subscribe((wishlist:any) => {
        this.wishlist = [...wishlist]
    })
  }

  moveList(id: string){
    this.BooklistDataService.moveFromList(id)
  }
}
