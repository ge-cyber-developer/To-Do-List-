import { Component, Input, EventEmitter, Output } from "@angular/core";


export type Item = {
  feito: boolean;
  name: string;
}



@Component({
  selector:'list-content',
  templateUrl: './list-content.html',
  styleUrls: ['list-content.css']
})

export class ListContent{


  @Input()
  itemsMudaram = new EventEmitter();

  @Output() removeItem = new EventEmitter();


  public items : Array<Item> = [];


  ngOnInit() {
    if (this.itemsMudaram) {
          //EVENTO     //SEMPRE Q ELE ACONTECER    //DADOS PASSADOS AO EMITIR EVENTO (dadosEnviadosQuandoFoiEmitido)
      this.itemsMudaram.subscribe(dadosEnviadosQuandoFoiEmitido => { // SEMPRE QUE ESSE EVENTO OCORRER

        this.items = dadosEnviadosQuandoFoiEmitido // OS ITEMS RECEBIDOS SÃO OS ITEMS DO FILHO (list-content)
      });
    }
  }


  showTarefas(){
    console.log(this.items)
  }


  removeTarefa( item : Item){
    this.removeItem.emit(item)
  }


}
