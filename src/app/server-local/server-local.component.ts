import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-local',
  templateUrl: './server-local.component.html',
  styleUrls: ['./server-local.component.css']
})
export class ServerLocalComponent {
  serverId: number = 10;
  serverStatus: string = "Offline"

  getServerStatus(): string {
    return this.serverStatus;
  }
}
