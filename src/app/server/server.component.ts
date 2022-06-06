import { Component, OnInit } from '@angular/core';

@Component({
  selector: ".app-server",//by class
  // selector: "[app-server]",// by attribute
  // selector: 'app-server',// by element
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  allowNewServer: boolean = false;
  serverCreationStatus: String = "server not created";
  serverName: string = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    if (this.serverName === "") {
      this.serverCreationStatus = "server not created";
    } else {

      this.serverCreationStatus = "server is created " + this.serverName;
    }
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
