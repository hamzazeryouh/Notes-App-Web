import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesAllComponent } from './notes-all/notes-all.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteBookComponent } from './note-book/note-book.component';
import { LikeComponent } from './like/like.component';
import { RemoveNotesComponent } from './remove-notes/remove-notes.component';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [

  { path: 'Notes', component: NotesAllComponent },
  { path: 'NoteBook', component:NoteBookComponent },
  { path: 'Like', component:LikeComponent },
  { path: 'RemoveNote', component:RemoveNotesComponent },
  { path: 'Addnote', component:AddNoteComponent },


  
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
