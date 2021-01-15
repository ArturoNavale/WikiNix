import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //following line is the initial status of a div
  appear: boolean = false;

  //finds div with tag #wordGezocht and assigns it to myDiv
  @ViewChild('myDiv') myDiv: ElementRef;


  ngOnInit(): void {

    //the following formula changes the state of a div (makes is appear)
    this.appear = true

    console.log("hoi");

  }

  ngAfterViewInit() {

    //prints the viewchild text which is not  available in  the ngOnInit
    console.log(this.myDiv.nativeElement.innerHTML)

  }
}
