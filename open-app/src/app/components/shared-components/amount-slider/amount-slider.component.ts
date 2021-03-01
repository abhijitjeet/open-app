import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amount-slider',
  templateUrl: './amount-slider.component.html',
  styleUrls: ['./amount-slider.component.scss']
})
export class AmountSliderComponent {
  @Input() sliderHeader: string | undefined;
  @Input() sliderMinValue: number | undefined;
  @Input() sliderMaxValue: number | undefined;
  @Input() showSliderLabels = false;
  amount = 0;

  sliderAmount(event: any): void {
    this.amount = event.value === this.sliderMinValue ? 0 : event.value;
  }
}
