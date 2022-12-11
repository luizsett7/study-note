import { User } from './../model/user';
import { Constants } from './constants';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }
    let user = new User(Constants.USERNAME_KEY, 'p@ssw0rd', true);
    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));
    localStorage.setItem(Constants.NOTES_KEY, JSON.stringify([]));
  }
}
