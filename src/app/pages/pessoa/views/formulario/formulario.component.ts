import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from '../../pessoa.service';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

    @Input() pessoa: Pessoa;
    @Output() returnParams = new EventEmitter();

    hasSubmit: boolean = false;
    formPessoa: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private service: PessoaService
        ) {}

    ngOnInit(){
        this.createForm(this.pessoa);
    }

    createForm(pessoa: Pessoa){
        this.formPessoa = this.formBuilder.group({
            id: [pessoa.id],
            nome: [pessoa.nome, Validators.required],
            cpf: [pessoa.cpf,[Validators.required, Validators.minLength(11)]],
            email: [pessoa.email, [Validators.required, Validators.email]],
            telefone: [pessoa.telefone, Validators.required],
            sexo: [pessoa.sexo, Validators.required],
            datanascimento: [pessoa.datanascimento, Validators.required]
        })
    }

    onSubmit(){
        this.hasSubmit = true;
        if(this.formPessoa.valid){
            this.service.save(this.formPessoa.value).subscribe(response => {
                var msg = response.userMessage;
                if(response.success){
                    this.service.showMensage(msg);
                    this.enviaParamns(true,true);
                } else {
                    this.service.erroHandler(msg);
                }
            })
        }
    }

    cancel(){
        this.enviaParamns(true,false);
    }

    hasError(controlName: string, errorName: string) {
        if(this.hasSubmit){
            return this.formPessoa.controls[controlName].hasError(errorName);
        }
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