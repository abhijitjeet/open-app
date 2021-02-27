import { ButtonItem } from './buttonItem.interface';
import { InfoCard } from './infoCard.interface';

export interface ProductData {
  menuItems: string[];
  buttonItems: ButtonItem[];
  infoCardContent: InfoCard[];
}