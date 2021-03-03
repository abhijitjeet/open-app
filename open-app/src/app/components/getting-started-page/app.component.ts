import { Component, OnInit } from '@angular/core';
import { EligibilityCalculatorProperties, SelectBoxItems } from 'src/app/interface/eligibilityCalculatorProperties.interface';
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
  emiSelectValue: SelectBoxItems[] = [];
  selected = '';
  eligibilityData: EligibilityCalculatorProperties = {
    header: '',
    sliderProperties: [],
    selectBox: {
      header: '',
      emiTenureStart: 0,
      emiTenureVariable: 0,
      numberOfTenures: 0
    },
    slideToggleMessage: '',
    emiExistingLoan: ''
  };
  productData: ProductData = {
    buttonItems: [],
    eligibilityCalculator: this.eligibilityData,
    infoCardContent: this.infoCardData,
    menuItems: [],
    textBoxValues: [],
    topics: [],
    loanCalculationTopic: []
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction);
    this.productData = (data as any).default[0];
    if (this.productData) {
      this.buttonItems = this.productData.buttonItems;
      this.menuItems = this.productData.menuItems;
      this.infoCardData = this.productData.infoCardContent;
      this.eligibilityData = this.productData.eligibilityCalculator;
      this.createEMIOptions();
      console.log(this.emiSelectValue);
    }
  }

  scrollFunction(): void {
    const toolbarSelector = document.getElementById('toolbar');
    if (document.documentElement.scrollTop > 50) {
      if (toolbarSelector) {
        toolbarSelector.classList.add('scrolled-toolbar');
      }
    } else {
      if (toolbarSelector) {
        toolbarSelector.classList.remove('scrolled-toolbar');
      }
    }
  }

  createEMIOptions(): void {
    let indexValue = 0;
    let emiOption = 0;
    do {
      emiOption = indexValue === 0
        ? this.eligibilityData.selectBox.emiTenureStart
        : emiOption + this.eligibilityData.selectBox.emiTenureVariable;
      this.emiSelectValue.push({
        name: emiOption.toString() + ' months',
        value: emiOption.toString()
      });
      indexValue++;
    } while (indexValue < this.eligibilityData.selectBox.numberOfTenures);
    this.selected = this.emiSelectValue[0].value;
  }

  onKeyDown(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.which);
    const pattern = /[0-9]/;
    if (!pattern.test(inputChar) && event.code !== 'Backspace') {
      event.preventDefault();
    }
  }
}
