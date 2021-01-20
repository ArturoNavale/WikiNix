import { animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() { }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');


    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
      delay: 75,
    });

    typewriter
      .pauseFor(2500)
      .typeString('A simple yet powerful native javascript')
      .pauseFor(300)
      .deleteChars(10)
      .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
      .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
      .pauseFor(1000)
      .callFunction(() => {
        console.log('typewriter finished')
      })
      .start();


  }

  public onClickButton(): void {
    const actions = [
      {
        actionType: 'add-text',
        target: 'hide-element1',
        textToAdd:
          'Arthur is <strong>een</strong> programmeergod. Ruben is er ook een.',
      },
      {
        actionType: 'replace-text',
        target: 'replace-element1',
        targetText: 'Arthur is geen programmeergod',
        textToReplace: 'geen programmeergod',
        textToReplaceWith: 'EEN programmeergod',
      },
    ];

    actions.forEach((action) => this.executeAction(action));
  }

  public executeAction(action) {
    console.log('Actions was excuted', action);
    switch (action.actionType) {
      case 'hide': {
        this.hideElement(action);
        break;
      }
      case 'display': {
        this.displayElement(action);
        break;
      }
      case 'add-text': {
        this.addText(action);
        break;
      }
      case 'replace-text': {
        this.replaceText(action);
        break;
      }
    }
  }

  public hideElement(action): void {
    const element = document.getElementById(action.target);
    element.style.display = 'none';
  }

  public displayElement(action): void {
    const element = document.getElementById(action.target);
    element.style.display = 'block';
  }

  public addText(action): void {
    let element = document.getElementById(action.target);
    element.innerHTML = action.textToAdd;
  }

  public replaceText(action): void {
    let element = document.getElementById(action.target);

    //add span before and after text to replace

    var oldString = element.innerHTML;

    var newString = oldString.replace(action.textToReplace, "</span><span class='animate'>" + action.textToReplaceWith + "</span><span>");

    const content = newString;

    //add span before and after complete string
    element.innerHTML = '<span>' + content + '</span>';

  }
}
