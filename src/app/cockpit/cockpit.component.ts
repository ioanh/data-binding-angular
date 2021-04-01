import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  // newServerContent = '';
  @Output('svCreated') serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter <{blueprintName: string, blueprintContent: string}>();
  @ViewChild('ServerContentInput', {static: true}) ContentInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameData: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameData.value, 
      serverContent: this.ContentInput.nativeElement.value
    })

  }

  onAddBlueprint(bluePrintNameData) {
    this.blueprintCreated.emit({
      blueprintName: bluePrintNameData.value, 
      blueprintContent: this.ContentInput.nativeElement.value
    })
  }


}
