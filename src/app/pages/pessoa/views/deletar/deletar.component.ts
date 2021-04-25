import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from '../../pessoa.service';

@Component({
    selector: 'app-deletar',
    templateUrl: './deletar.component.html',
    styleUrls: ['./deletar.component.scss']
})
export class DeletarComponent implements OnInit {

    @Input() pessoa: Pessoa;
    @Output() returnParams = new EventEmitter();

    constructor(
        private service: PessoaService
        ) {}

    ngOnInit(){
        
    }

    excluir(){
        this.service.deletePessoa(this.pessoa).subscribe(response => {
            var msg = 'Pessoa exluída com sucesso!';
            this.service.showMensage(msg);
            this.enviaParamns(true,true);
        })
    }

    cancel(){
        this.enviaParamns(true,false);
    }

    enviaParamns(hideModal:boolean, updateTable:boolean) { // DEVOLVE PARA QUEM O INVOVOU
        this.returnParams.emit(
            {
                "hideModal" : hideModal,
                "updateTable" : updateTable
            }
        );
    }
}