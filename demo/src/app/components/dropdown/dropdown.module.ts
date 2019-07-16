import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgbdComponentsSharedModule, NgbdDemoList } from '../shared';
import { NgbdApiPage } from '../shared/api-page/api.component';
import { NgbdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdDropdownBasic } from './demos/basic/dropdown-basic';
import { NgbdDropdownBasicModule } from './demos/basic/dropdown-basic.module';
import { NgbdDropdownConfig } from './demos/config/dropdown-config';
import { NgbdDropdownConfigModule } from './demos/config/dropdown-config.module';
import { NgbdDropdownForm } from './demos/form/dropdown-form';
import { NgbdDropdownFormModule } from './demos/form/dropdown-form.module';
import { NgbdDropdownManual } from './demos/manual/dropdown-manual';
import { NgbdDropdownManualModule } from './demos/manual/dropdown-manual.module';
import { NgbdDropdownNavbar } from './demos/navbar/dropdown-navbar';
import { NgbdDropdownNavbarModule } from './demos/navbar/dropdown-navbar.module';
import { NgbdDropdownSplit } from './demos/split/dropdown-split';
import { NgbdDropdownSplitModule } from './demos/split/dropdown-split.module';

const DEMOS = {
  basic: {
    title: 'Dropdown',
    type: NgbdDropdownBasic,
    code: require('!!raw-loader!./demos/basic/dropdown-basic'),
    markup: require('!!raw-loader!./demos/basic/dropdown-basic.html')
  },
  manual: {
    title: 'Manual and custom triggers',
    type: NgbdDropdownManual,
    code: require('!!raw-loader!./demos/manual/dropdown-manual'),
    markup: require('!!raw-loader!./demos/manual/dropdown-manual.html')
  },
  split: {
    title: 'Button groups and split buttons',
    type: NgbdDropdownSplit,
    code: require('!!raw-loader!./demos/split/dropdown-split'),
    markup: require('!!raw-loader!./demos/split/dropdown-split.html')
  },
  form: {
    title: 'Mixed menu items and form',
    type: NgbdDropdownForm,
    code: require('!!raw-loader!./demos/form/dropdown-form'),
    markup: require('!!raw-loader!./demos/form/dropdown-form.html')
  },
  navbar: {
    title: 'Dynamic positioning in a navbar',
    type: NgbdDropdownNavbar,
    code: require('!!raw-loader!./demos/navbar/dropdown-navbar'),
    markup: require('!!raw-loader!./demos/navbar/dropdown-navbar.html')
  },
  config: {
    title: 'Global configuration of dropdowns',
    type: NgbdDropdownConfig,
    code: require('!!raw-loader!./demos/config/dropdown-config'),
    markup: require('!!raw-loader!./demos/config/dropdown-config.html')
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapper,
    children: [
      { path: 'examples', component: NgbdExamplesPage },
      { path: 'api', component: NgbdApiPage }
    ]
  }
];

@NgModule({
  imports: [
    NgbdSharedModule,
    NgbdComponentsSharedModule,
    NgbdDropdownBasicModule,
    NgbdDropdownConfigModule,
    NgbdDropdownManualModule,
    NgbdDropdownSplitModule,
    NgbdDropdownFormModule,
    NgbdDropdownNavbarModule
  ]
})
export class NgbdDropdownModule {
  constructor(demoList: NgbdDemoList) {
    demoList.register('dropdown', DEMOS);
  }
}
