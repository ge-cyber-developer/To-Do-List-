import { Component, Input, EventEmitter, Output } from '@angular/core';

export type Item = {
  feito: boolean;
  name: string;
};

@Component({
  selector: 'list-content',
  templateUrl: './list-content.html',
  styleUrls: ['list-content.css'],
})
export class ListContent {
  @Input()
  itemsMudaram = new EventEmitter();

  @Output() removeItem = new EventEmitter();
  @Output() editItem = new EventEmitter();
  @Output() saveItem = new EventEmitter();

  public items: Array<Item> = [];
  public isEditing: Boolean = false;
  public editionItem: string = '';

  ngOnInit() {
    if (this.itemsMudaram) {
      //EVENTO     //SEMPRE Q ELE ACONTECER    //DADOS PASSADOS AO EMITIR EVENTO (dadosEnviadosQuandoFoiEmitido)
      this.itemsMudaram.subscribe((dadosEnviadosQuandoFoiEmitido) => {
        // SEMPRE QUE ESSE EVENTO OCORRER

        this.items = dadosEnviadosQuandoFoiEmitido; // OS ITEMS RECEBIDOS SÃO OS ITEMS DO FILHO (list-content)
      });
    }
  }

  showTarefas() {
    console.log(this.items);
  }

  removeTarefa(item: Item) {
    this.removeItem.emit(item);
  }

  editTarefa(item: Item) {
    this.isEditing = true;
    this.editItem.emit(item);
  }

  saveTarefa(edition: string) {
    console.log(this.editionItem);
    this.saveItem.emit(edition);
    this.isEditing = false;
  }
}
