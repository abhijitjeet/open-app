import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Position } from 'src/app/interface/position.interface';

@Component({
  selector: 'info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements AfterViewInit {

  @Input() header: string | undefined;
  @Input() body: string | undefined;
  @Input() imageSource: string | undefined;
  @Input() position: Position | undefined;
  @ViewChild('infoCards') infoCards: ElementRef | undefined;
  constructor(
    private renderer: Renderer2
  ) { }
  ngAfterViewInit(): void {
    if (this.position && this.infoCards) {
      this.renderer.setStyle(this.infoCards.nativeElement, 'top', this.position.top);
      this.renderer.setStyle(this.infoCards.nativeElement, 'right', this.position.right);
      this.renderer.setStyle(this.infoCards.nativeElement, 'bottom', this.position.bottom);
      this.renderer.setStyle(this.infoCards.nativeElement, 'left', this.position.left);
    }
  }

}
