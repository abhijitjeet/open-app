import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Position } from 'src/app/interface/position.interface';

@Component({
  selector: 'image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements AfterViewInit{
  @Input() imageSource: string | undefined;
  @Input() position: Position | undefined;
  @ViewChild('imageBox') imageBox: ElementRef | undefined;
  constructor (
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (this.position && this.imageBox) {
      this.renderer.setStyle(this.imageBox.nativeElement, 'top', this.position.top);
      this.renderer.setStyle(this.imageBox.nativeElement, 'bottom', this.position.bottom);
      this.renderer.setStyle(this.imageBox.nativeElement, 'left', this.position.left);
      this.renderer.setStyle(this.imageBox.nativeElement, 'right', this.position.right);
    }
  }
}
