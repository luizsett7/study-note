export class Priority{
  id?: string;
  name?: string;

  constructor(o: Priority = {} as Priority){
    let {id = undefined, name = undefined} = o;
    this.id = id;
    this.name = name;
  }
}
