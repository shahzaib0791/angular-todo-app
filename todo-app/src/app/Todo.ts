export class Todo {
    id: number;
    title: string;
    desc: string;
    is_active: boolean;
  
    public constructor(id: number, title:string, desc:string, is_active:boolean) {
      this.id = id;
      this.title = title;
      this.desc = desc;
      this.is_active = is_active;
    }
  
  }