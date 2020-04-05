import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NeedGuardComponent } from './need-guard/need-guard.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: NameEditorComponent },
  { path: 'need-guard', component: NeedGuardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
