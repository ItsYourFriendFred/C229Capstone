import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  Attribute,
  SimpleChange,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[counterOf]',
})
export class CounterDirective {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  @Input('counterOf')
  counter: number;

  ngOnChanges(changes: SimpleChange): void {
    this.container.clear();
    for (let i = 1; i < this.counter + 1; i++) {
        this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i));
        
    }
  }

}

class CounterDirectiveContext{
    constructor(public $implicit: any) {

    }
}