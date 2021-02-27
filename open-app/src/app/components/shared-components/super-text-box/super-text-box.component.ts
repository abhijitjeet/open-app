import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'super-text-box',
  templateUrl: './super-text-box.component.html',
  styleUrls: ['./super-text-box.component.scss']
})
export class SuperTextBoxComponent {

  @Input() message: string | undefined;
  @Input() position: string | undefined;

}
