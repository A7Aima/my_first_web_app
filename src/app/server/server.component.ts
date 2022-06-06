import { Component, OnInit } from '@angular/core';

@Component({
  selector: ".app-server",//by class
  // selector: "[app-server]",// by attribute
  // selector: 'app-server',// by element
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
