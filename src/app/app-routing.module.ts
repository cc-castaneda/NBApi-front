import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerFormComponent } from './player-form/player-form.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'player-list'  },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'player-detail/:id', component: PlayerDetailComponent },
  { path: 'player-detail/edit/:id', component: PlayerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
