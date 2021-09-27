import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesAllComponent } from './notes-all/notes-all.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'AllNotes', component: NotesAllComponent },
  { redirectTo:'AllNotes'}
  
];

@NgModule({
  declarations: [
   
  ],

  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
