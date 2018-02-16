import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ConverterPage } from '../converter/converter';
import { CalculatorPage } from '../calculator/calculator';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConverterPage;
  tab3Root = CalculatorPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
