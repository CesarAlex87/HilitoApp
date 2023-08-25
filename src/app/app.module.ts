import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { InicioSessionComponent } from './components/inicio-session/inicio-session.component';
=======
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
>>>>>>> 34d9d0a54c46766df2d08bc9ad6fb85657c18874

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InicioSessionComponent
=======
    LoginComponent,
    RegisterComponent,
    HomeComponent,
>>>>>>> 34d9d0a54c46766df2d08bc9ad6fb85657c18874
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
