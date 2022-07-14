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
  serverCreated: boolean = false;
  serversList = ["Server 1", "Server 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    if (this.serverName === "") {
      this.serverCreated = false;
      if (this.serversList !== []) {
        this.serversList.pop();
      }
      this.serverCreationStatus = "server not created";
    } else {
      this.serverCreated = true;
      if (!this.serversList.includes(this.serverName)) {

        this.serversList.push(this.serverName);
      }
      this.serverCreationStatus = "server is created " + this.serverName;
    }
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
