import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/shared/model/pessoa.model';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

    @Input() pessoa: Pessoa;

    formPessoa: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(){
        this.createForm(this.pessoa);
    }

    createForm(pessoa: Pessoa){
        this.formPessoa = this.formBuilder.group({
            id: [pessoa.id],
            nome: [pessoa.nome, Validators.required],
            cpf: [pessoa.cpf, Validators.required],
            email: [pessoa.email, Validators.email],
            telefone: [pessoa.telefone, Validators.required],
            sexo: [pessoa.sexo, Validators.required],
            datanascimento: [pessoa.datanascimento, Validators.required]
        })
    }

    onSubmit(){
        if(this.formPessoa.valid){
            console.log(this.formPessoa.value);
            this.formPessoa.reset(new Pessoa());
        }
    }
}