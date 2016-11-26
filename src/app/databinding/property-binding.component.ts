import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  templateUrl: 'property-binding.component.html',
  styleUrls: ['property-binding.component.css']
})
export class PropertyBindingComponent{
  @Input() result: number = 0
}
