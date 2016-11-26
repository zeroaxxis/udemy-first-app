import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <h1>Lifecycle Tutorial</h1>
      <ng-content></ng-content>
      <p #boundParagraph>{{bindable}}</p>
      <p>Bound Paragraph: {{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{

  @Input() bindable = 1000;

  @ViewChild('boundParagraph') boundParagraph : HTMLElement;

  @ContentChild('boundContent') boundContent:HTMLElement;

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
    console.log(this.boundContent)
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph)
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook:string){
    console.log(hook)
  }

}
