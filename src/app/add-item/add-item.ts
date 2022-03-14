import { Component, Input, Output, EventEmitter } from '@angular/core';

export type Item = {
  feito: boolean;
  name: string;
};

@Component({
  selector: 'add-item',
  templateUrl: './add-item.html',
  styleUrls: ['add-item.css'],
})
export class AddItem {
  @Output() adicionarItems = new EventEmitter();

  public tarefa = '';

  addTarefa() {
    this.adicionarItems.emit({
      name: this.tarefa,
      feito: false,
    });
  }
}
