import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TypeEnum } from 'src/app/shared/enum/type.enum';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { ModalPessoaComponent } from './modal/modal-pessoa.component';

@Component({
    selector: 'app-pessoa',
    templateUrl: './pessoa.component.html',
    styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit, OnChanges {
    
    constructor(
        private service: PessoaService,
        private router : Router,
        public dialog: MatDialog
    ) { }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        
    }
    
}