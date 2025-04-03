import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PhoneService } from './phone.service';

const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: 'details/:id', component: PhoneDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
