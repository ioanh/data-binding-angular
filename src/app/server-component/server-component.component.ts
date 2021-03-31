import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerComponentComponent implements OnInit {

  @Input('ElementInfo') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }

}
