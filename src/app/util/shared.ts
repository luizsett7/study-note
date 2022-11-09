import { Constants } from './constants';
import { Note } from '../model/note';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.NOTES_KEY) != null) {
      return;
    }
    localStorage.setItem(Constants.NOTES_KEY, JSON.stringify([]));
  }
}
