import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import * as data from '../assets/config.json';
import { Action } from './models/action';
import { Snapshot } from './models/snapshot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public displayTypeWriterDemo = true;
  public snapshotCount = 0;
  public snapshots: Snapshot[];

  ngOnInit() {
    this.snapshots = (data as any).default;
    console.log('snapshots', this.snapshots);
  }

  public onClickButton(): void {
    this.snapshots[this.snapshotCount].actions.forEach((action) =>
      this.executeAction(action)
    );
    this.snapshotCount++;
  }

  public executeAction(action: Action) {
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
        console.log('Replace was excuted', action);
        break;
      }
    }
  }

  public hideElement(action: Action): void {
    const element = document.getElementById(action.target);
    element.style.display = 'none';
  }

  public displayElement(action: Action): void {
    const element = document.getElementById(action.target);
    element.style.display = 'block';
  }

  public addText(action: Action): void {
    const element = document.getElementById(action.target);
    const typewriter = new Typewriter(element, {
      delay: 75,
    });

    typewriter
      .pauseFor(500)
      .typeString(action.textToAdd)
      .pauseFor(500)
      .callFunction(() => {
        element.innerHTML = action.textToAdd;
      })
      .start();
  }

  public replaceText(action: Action): void {
    const element = document.getElementById(action.target);

    // add span before and after text to replace

    const oldString = element.innerHTML;
    const animateString = oldString.replace(
      action.textToReplace,
      '</span><span id="animate"></span><span>'
    );
    const newString = oldString.replace(
      action.textToReplace,
      action.textToReplaceWith
    );

    // add span before and after complete string
    element.innerHTML = '<span>' + animateString + '</span>';

    const animate = document.getElementById('animate');
    const typewriter = new Typewriter(animate, {
      delay: 75,
    });

    typewriter
      .pauseFor(500)
      .typeString(action.textToReplaceWith)
      .pauseFor(500)
      .callFunction(() => {
        element.innerHTML = newString;
      })
      .start();
  }
}
