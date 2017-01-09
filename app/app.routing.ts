import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { SolValueComponent} from './components/solvalue.component';
import { AboutComponent}  from './components/about.component';

const appRoutes: Routes = [
  {
    path:'',
    component: SolValueComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

