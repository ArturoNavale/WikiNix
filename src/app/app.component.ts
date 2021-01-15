import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //following line is the initial status of a div
  appear: boolean = false;

  ngOnInit(): void {

    //the following formula changes the state of a div (makes is appear)
    this.appear = true



    console.log("componentIkHouVanPasta")

  }

  title = 'wikipedia-timeline';
}
