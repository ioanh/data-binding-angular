import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //@Input('ElementInfo') element: {type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('heading', {static: true} ) headingOne: ElementRef
  @ContentChild('paragrphFromApp', {static: true}) paragraphen: ElementRef

  constructor() {
    console.log('constructor called!!!!')
   }

  ngOnChanges(change: SimpleChanges){
    console.log('ng on changes was run')
    console.log(change)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!!!!')
    console.log(`This is the oninit with ${this.paragraphen}`)
  }

  ngDoCheck() {
    console.log('ngDoCheck called!!!!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!!!')
    console.log(`Heading is ${this.headingOne.nativeElement.textContent}`)
    console.log(`This is the  content oninit with ${this.paragraphen}`)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!!!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!!!')
    console.log(`Heading is ${this.headingOne.nativeElement.textContent}`)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!!!')
  }

  ngOnDestroy(){
    console.log('component was destroyed')
  }

}
