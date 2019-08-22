import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = new Array(500).fill(0);

  constructor() {
    console.log(this.personas);
   }

  ngOnInit() {
  }

  irAlFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irAlInicio() {
    this.viewport.scrollToIndex(0);
  }

}
