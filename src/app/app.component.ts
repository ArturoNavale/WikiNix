import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  public onClickButton(): void {
    const actions = [
      {
        actionType: 'add-text',
        target: 'hide-element1',
        textToAdd: 'Arthur is een programmeergod',
      },
      // {
      //   actionType: 'replace-text',
      //   target: 'hide-element1',
      //   textToReplace: 'Arthur is een programmeergod',
      //   textToReplaceWith: 'Arthur is GEEN programmeergod',
      // },
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
        this.addText(action);
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
    const content = element.innerHTML;

    // TODO replace text
  }
}
