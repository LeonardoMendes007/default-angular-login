import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

//Components
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    HomeComponent
    
  ],
  imports: [
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AdminModule { }
