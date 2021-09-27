import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
  Notes: any[] = [];

  constructor () { }

  async save(item: any) {
      if (item.id) {
          this.update(item);
      } else {
          this.create(item);
      }
  }

  async create(item: any) {
      let items = [];
      const itemsStorage = await localStorage.getItem('@Notes');
      if (itemsStorage) {
          items = JSON.parse(itemsStorage);
      }
      item.id = new Date().getTime();
      items.push(item);
      localStorage.setItem('@Notes', JSON.stringify(items));
  }

  async delete(idItem: any) {
      const itemsStorage = await localStorage.getItem('@Notes');
      const items = JSON.parse(itemsStorage);
      const itemsFiltered = items.filter( item => item.id !== Number(idItem));
      localStorage.setItem('@Notes', JSON.stringify(itemsFiltered));
  }

  async update(item:any) {
      let items = [];
      const itemsStorage = await localStorage.getItem('@Notes');
      if (itemsStorage) {
          items = JSON.parse(itemsStorage);
      }
      items.map( (itemStorage, index) => {
          if (itemStorage.id === Number(item.id)) {
              items[index] = item;
          }
      });
      localStorage.setItem('@Notes', JSON.stringify(items));
  }

  async getItems() {
      this.items = [];
      const itemsStorage = await localStorage.getItem('@Notes');
      if (itemsStorage) {
          this.items = JSON.parse(itemsStorage);
      }
      return this.items;
  }

  async getItemById(idItem) {
      let items = [];
      const itemsStorage = await localStorage.getItem('@Notes');
      if (itemsStorage) {
          items = JSON.parse(itemsStorage);
      }
      const itemsFiltered = items.filter( item => (item.id) ===  Number(idItem));
      return itemsFiltered[0];
  }

  async getByName(value) {
      let items = [];
      const itemsStorage = await localStorage.getItem('@Notes');
      if (itemsStorage) {
          items = JSON.parse(itemsStorage);
      }
      const itemsFiltered = items.filter( item => item.name.toLowerCase().includes(value.toLowerCase()));
      return itemsFiltered;
  }
}
