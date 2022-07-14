import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-local',
  templateUrl: './server-local.component.html',
  styleUrls: ['./server-local.component.css'],
})
export class ServerLocalComponent {
  serverId: number = 10;
  serverStatus: string = "Offline";

  constructor() {
    this.serverStatus = Math.random() > 0.6 ? "Online" : "Offline";
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "Online" ? "green" : "red";
  }
}
