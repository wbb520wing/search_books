import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 @ViewChild("inputbox", {static: true}) inputbox!: ElementRef;
 @ViewChild("searchbtn", {static: true}) searchbtn!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  getInputValue() {
    return fromEvent(this.inputbox.nativeElement, 'keyup')
  }

  triggerSearch(){
    return fromEvent(this.searchbtn.nativeElement, 'click');
  }

  inputClear(){
    this.inputbox.nativeElement.value = '';
  }
}
