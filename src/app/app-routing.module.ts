import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from './liste-users/list-users/list-users.component';
import { ListSujetsComponent } from './list-sujets/list-sujets.component';
import { VoteComponent } from './vote/vote.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'listeusers', component:ListUsersComponent },
  { path:'listesujets', component: ListSujetsComponent},
  { path: 'vote', component:VoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
