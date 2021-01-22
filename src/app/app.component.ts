import { AfterViewInit, Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import { Snapshot } from 'src/app/models/snapshot';
import { Action } from 'src/app/models/action';
import * as data from '../assets/config.json';
import { ActionSequence } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public displayTypeWriterDemo = true;
  public snapshotCount = 0;

  public fruit: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Apple',
    'Banana',
    'Orange',
  ];

  ngOnInit() {
    console.log(this.fruit.length);
    console.log(this.fruit[0]);
    this.fruit.push('Grape');
    console.log(this.fruit.length);
  }

  ngAfterViewInit() {

  }

  public onClickButton(): void {


    const snapshots: Snapshot[] = (data as any).default;
    const actions = snapshots[this.snapshotCount].actions;

    console.log('snapshots', snapshots);
    console.log('r', actions);

    actions.forEach((action) => this.executeAction(action));

    this.snapshotCount++;
    console.log(this.snapshotCount);

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
        console.log('Replace was excuted', action);
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

  public replaceText(action): void {
    const element = document.getElementById(action.target);

    // add span before and after text to replace

    const oldString = element.innerHTML;
    const animateString = oldString.replace(action.textToReplace, '</span><span id="animate"></span><span>');
    const newString = oldString.replace(action.textToReplace, action.textToReplaceWith);

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
