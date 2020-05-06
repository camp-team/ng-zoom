import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FriendsComponent } from './friends/friends.component';
import { GirlsComponent } from './girls/girls.component';

@NgModule({
  declarations: [HomeComponent, FriendsComponent, GirlsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
