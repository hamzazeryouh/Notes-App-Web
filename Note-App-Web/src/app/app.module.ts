import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestPipe } from './test.pipe';
import { NotesAllComponent } from './notes-all/notes-all.component';
import { NoteBookComponent } from './note-book/note-book.component';
import { LikeComponent } from './like/like.component';
import { RemoveNotesComponent } from './remove-notes/remove-notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    NotesAllComponent,
    NoteBookComponent,
    LikeComponent,
    RemoveNotesComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
