import { Component, Input } from '@angular/core';

@Component({
  selector: 'accounting-dot',
  templateUrl: './accounting-dot.component.html',
  styleUrls: ['./accounting-dot.component.scss']
})
export class AccountingDotComponent {
   @Input() position: string | undefined;
}
