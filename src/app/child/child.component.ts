import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

//import EventEmitter from "events"; not import EventEmitter here


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  encapsulation :ViewEncapsulation.None
})
export class ChildComponent implements OnInit{

  message ="Hello from a view child";

  @Input() childMessage: string | undefined;

  @Output() messageEvent=new EventEmitter<string>();
  constructor() {
  }
  sendMessage(){
    this.messageEvent.emit("Hello Parent from you Child!");
  }

  ngOnInit(): void {
  }
}
