import { Component, OnInit, ViewChild } from '@angular/core';
import { BooklistDataService } from './booklistData.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'search-book-web';
  keyword!:string;
  @ViewChild(HomeComponent, {static: true}) HomeComponent!: HomeComponent;


  constructor(private BooklistDataService: BooklistDataService){}

  ngOnInit(): void {
    this.HomeComponent.getInputValue().subscribe(_ => {
      this.keyword = this.HomeComponent.inputbox.nativeElement.value
    })
    this.HomeComponent.triggerSearch().subscribe(_ =>{
      this.BooklistDataService.getBookList(this.keyword);
      this.HomeComponent.inputClear()
    })
  }



}
