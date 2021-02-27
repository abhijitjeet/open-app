import { Component, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/interface/infoCard.interface';
import { ProductData } from 'src/app/interface/productData.interface';
import { ButtonItem } from './../../interface/buttonItem.interface';
import * as data from './../../productConfig.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menuItems: string[] = [];
  buttonItems: ButtonItem[] = [];
  infoCardData: InfoCard[] = [];
  productData: ProductData | undefined;

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction);
    this.productData = (data as any).default[0];
    if (this.productData) {
      this.buttonItems = this.productData.buttonItems;
      this.menuItems = this.productData.menuItems;
      this.infoCardData = this.productData.infoCardContent;
    }
  }

  scrollFunction() {
    var toolbarSelector = document.getElementById('toolbar');
    if(document.documentElement.scrollTop > 50) {
      if (toolbarSelector) {
        toolbarSelector.classList.add('scrolled-toolbar');
      }
    } else {
      if (toolbarSelector) {
        toolbarSelector.classList.remove('scrolled-toolbar');
      }
    }
  }
}
