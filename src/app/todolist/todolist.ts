import { Component, EventEmitter } from '@angular/core';
import { ListContent } from '../list-content/list-content';

export type Item = {
  feito: boolean;
  name: string;
};

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.html',
  styleUrls: ['todolist.css'],
})
export class ToDoList {
  public tarefa = '';
  public items: Array<Item> = [
    { name: 'item1', feito: false },
    { name: 'item2', feito: false },
    { name: 'item3', feito: false },
  ];
  public itemsMudaram = new EventEmitter();

  ngOnInit() {
    let self = this;
    setTimeout(function () {
      self.itemsMudaram.emit(self.items);
    }, 1000);
  }

  addTarefa(tarefa: Item) {
    this.items.push(tarefa);
    this.itemsMudaram.emit(this.items);
  }

  public localizacaoItem: number = 0;

  editTarefa(tarefa: Item) {
    this.localizacaoItem = this.items.indexOf(tarefa);
    console.log(this.localizacaoItem);
  }

  saveTarefa(edition: string) {
    console.log(this.localizacaoItem);
    this.items[this.localizacaoItem].name = edition;
    this.itemsMudaram.emit(this.items);
  }

  removeTarefa(itemASerDeletado: Object) {
    this.items = this.items.filter((itemNoArray) => {
      if (itemNoArray != itemASerDeletado) {
        return true;
      } else {
        return false;
      }
    });

    this.itemsMudaram.emit(this.items);
  }
}
