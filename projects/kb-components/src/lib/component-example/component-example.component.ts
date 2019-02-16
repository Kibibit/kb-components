import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'kb-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.css']
})
export class ComponentExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('givenCode') givenCode: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    debugger;
    console.log(this.givenCode);
  }

}
