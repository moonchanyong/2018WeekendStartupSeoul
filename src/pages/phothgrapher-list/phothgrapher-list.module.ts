import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhothgrapherListPage } from './phothgrapher-list';

@NgModule({
  declarations: [
    PhothgrapherListPage,
  ],
  imports: [
    IonicPageModule.forChild(PhothgrapherListPage),
  ],
})
export class PhothgrapherListPageModule {}
