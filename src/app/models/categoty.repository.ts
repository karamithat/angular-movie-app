import { Category } from './category';
export class CategoryRepository {
  private categories: Category[];

  constructor(){
    this.categories = [
      {id:1 , name:"Action"},
      {id:2 , name:"Horror"},
      {id:3 , name:"Mystery"},
      {id:4 , name:"Dram"},
    ];
  }

  getCategories(): Category[]{
    return this.categories;
  }
}
