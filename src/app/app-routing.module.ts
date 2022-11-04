import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  { path: '', component: NoteComponent },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent, children: [{ path: 'edit', component: EditComponent }]},
  { path: 'view/:id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
