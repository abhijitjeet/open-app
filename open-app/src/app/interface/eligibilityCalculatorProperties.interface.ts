export interface EligibilityCalculatorProperties {
  header: string;
  sliderProperties: SliderProperties[];
  selectBox: SelectBoxProperties;
}

export interface SelectBoxItems {
  name: string;
  value: string;
}

interface SliderProperties {
  header: string;
  minValue: number;
  maxValue: number;
  showLabel: boolean;
}

interface SelectBoxProperties {
  header: string;
  emiTenureStart: number;
  numberOfTenures: number;
  emiTenureVariable: number;
}
