import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MarketComponent } from './pages/market/market.component';
import { RatingComponent } from './pages/rating/rating.component';
import { TaskComponent } from './pages/rating/task/task.component';
import { TaskListComponent } from './pages/rating/task-list/task-list.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";


const routes: Routes = [
  {path: 'market', component: MarketComponent},
  {path: 'employee', component: MainPageComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: MainPageComponent},

];


function MainComponent() {

}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MarketComponent,
    RatingComponent,
    TaskComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
