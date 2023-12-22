import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  handleClick($event: MouseEvent) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }
}
