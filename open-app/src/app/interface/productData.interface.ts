import { ButtonItem } from './buttonItem.interface';
import { InfoCard } from './infoCard.interface';
import { EligibilityCalculatorProperties } from './eligibilityCalculatorProperties.interface';

export interface ProductData {
  menuItems: string[];
  buttonItems: ButtonItem[];
  infoCardContent: InfoCard[];
  eligibilityCalculator: EligibilityCalculatorProperties;
  textBoxValues: string[];
  topics: string[];
  loanCalculationTopic: string[];
}
