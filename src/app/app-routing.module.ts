import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: 'details/:id', component: PhoneDetailsComponent },
  { path: 'carousel/:id', component: CarouselComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
