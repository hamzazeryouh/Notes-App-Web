import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

export class NoteInfo {
    id!: number;
    title!: string;
  }
  
  export class Note {
    id!: number;
    title!: String;
    TextBody!: String;
    IsLike: boolean = false;
    isRemove: boolean = false;
    NoteBook: boolean = false;

  }
@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
    private notes: Note[];
    private nextId = 0;
    private notesSubject = new BehaviorSubject<NoteInfo[]>([]);
  
    constructor() {
      this.notes = JSON.parse(localStorage.getItem('notes')) || [];
      for (const note of this.notes) {
        if (note.id >= this.nextId) this.nextId = note.id+1;
      }
      this.update();
    }
  
    subscribe(observer: Observer<NoteInfo[]>) {
      this.notesSubject.subscribe(observer);
    }
  
    addNote(title: string, text: string): Note {
        let islike=false;
        let isremove=false;
        let isbooknote=false;
      const note = {id: this.nextId++, title, text,islike,isremove,isbooknote};
      this.notes.push(note);
      this.update();
      return note;
    }


  
    getNote(id: number): Note {
      const index = this.findIndex(id);
      return this.notes[index];
    }

   

    
    updateNoteQuice(id: number, title: string, text: string) {
      const index = this.findIndex(id);
      this.notes[index].title=title;
      this.notes[index].TextBody=text;
      this.update();
    }

    updateNoteLike(id: number) {
        const index = this.findIndex(id);
        this.notes[index].IsLike=true;
        this.update();
      }

      updateNoteIsRemove(id: number) {
        const index = this.findIndex(id);
        this.notes[index].isRemove=true;
        this.update();
      }
      updateNoteIsNoteBook(id: number) {
        const index = this.findIndex(id);
        this.notes[index].NoteBook=true;
        this.update();
      }
    deleteNote(id: number) {
      const index = this.findIndex(id);
      this.notes.splice(index, 1);
      this.update();
    }
  
    private update() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this.notesSubject.next(this.notes.map(
        note => ({
            id: note.id, 
            title: note.title,
            })
      ));
    }
  
    private findIndex(id: number): number {
      for (let i=0; i<this.notes.length; i++) {
        if (this.notes[i].id === id) return i;
      }
      throw new Error(`Note with id ${id} was not found!`);
    }
}
