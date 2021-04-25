import { Component, Input, OnInit } from '@angular/core';
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
        if(this.formPessoa.valid){
            // console.log(this.formPessoa.value);
            // this.formPessoa.reset(new Pessoa());
            this.service.save(this.formPessoa.value).subscribe(response => {
                console.log(response);
            })
        }
    }

    hasError(controlName: string, errorName: string) {
        return this.formPessoa.controls[controlName].hasError(errorName);
    }
}