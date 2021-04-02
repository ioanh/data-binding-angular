import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //@Input('ElementInfo') element: {type: string, name: string, content: string}
  @Input() name: string;

  constructor() {
    console.log('constructor called!!!!')
   }

  ngOnChanges(change: SimpleChanges){
    console.log('ng on changes was run')
    console.log(change)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!!!!')
  }

  ngDoCheck() {
    console.log('ngDoCheck called!!!!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!!!')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!!!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!!!')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!!!')
  }

  ngOnDestroy(){
    console.log('component was destroyed')
  }

}
