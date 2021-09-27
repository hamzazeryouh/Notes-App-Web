import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesAllComponent } from './notes-all/notes-all.component';
import { NoteBookComponent } from './note-book/note-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesAllComponent,
    NoteBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
