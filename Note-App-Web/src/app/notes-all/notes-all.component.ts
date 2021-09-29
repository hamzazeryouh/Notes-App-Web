import { Component, Input, OnInit } from '@angular/core';
import { INotes } from '../Notes.model';

@Component({
  selector: 'app-notes-all',
  templateUrl: './notes-all.component.html',
  styleUrls: ['./notes-all.component.css']
})
export class NotesAllComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

   SelectedNotes:INotes | any;
  @Input()
  set Notes(Notes: INotes) {
      if (Notes != null) {
          this.SelectedNotes = Notes;
      } 
  }

likNote(id:any){
    localStorage.getItem(id)
}


}
