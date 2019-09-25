import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerFilterPipe } from './player-list/player-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    NavigationComponent,
    PlayerFormComponent,
    PlayerFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
