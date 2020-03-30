import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './signUp/signUp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './logIn/logIn.component';
import { DataSharingService } from './dataSharing.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
