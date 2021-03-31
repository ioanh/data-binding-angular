import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  newServerContent = '';
  @Output('svCreated') serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter <{blueprintName: string, blueprintContent: string}>();


  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameData: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameData.value, 
      serverContent: this.newServerContent
    })

  }

  onAddBlueprint(bluePrintNameData) {
    this.blueprintCreated.emit({
      blueprintName: bluePrintNameData.value, 
      blueprintContent: this.newServerContent
    })
  }


}
