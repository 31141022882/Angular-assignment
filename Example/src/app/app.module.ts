import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NeedGuardComponent } from './need-guard/need-guard.component';
import { ParentComponent } from './family/parent/parent.component';
import { ChildAComponent } from './family/childs/child-a/child-a.component';
import { ChildBComponent } from './family/childs/child-b/child-b.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    NeedGuardComponent,
    ParentComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
