import { Priority } from './priority';
export class Note{
  id!: string;
  title: string;
  description: string;
  priority?: Priority;
  date: string;

  constructor(title: string, description: string, priority: Priority, date: string){
    this.id = String(Math.round(Math.random() * 1000));
    this.title = title;
    this.description = description;
    if(priority == undefined){
      this.priority = priority;
    }
    this.date = String(new Date());
  }

  public static clone(note: Note){
    let n: Note = new Note(note.title, note.description, new Priority(note.priority), note.date);
    return n;
  }
}
