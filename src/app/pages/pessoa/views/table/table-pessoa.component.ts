import { Component, OnInit, SimpleChanges, OnChanges, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PessoaService } from '../../pessoa.service';
import { MatPaginator } from '@angular/material/paginator';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalPessoaComponent } from '../modal/modal-pessoa.component';
import { TypeEnum } from 'src/app/shared/enum/type.enum';

@Component({
    selector: 'table-pessoa',
    templateUrl: './table-pessoa.component.html',
    styleUrls: ['./table-pessoa.component.scss']
})
export class TablePessoaComponent implements OnInit, OnChanges {

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    table = [];
    dataSource = new MatTableDataSource();
    displayedColumns = [
                        'ID',
                        'NOME',
                        'CPF',
                        'EMAIL',
                        'TELEFONE',
                        'SEXO',
                        'DATA_DE_NASCIMENTO',
                        'ACAO'
                    ];

    constructor(
        private service: PessoaService,
        public dialog: MatDialog
    ) { }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }

    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.loadTable();
        console.log('iniciando...');
    }

    ngAfterViewInit(): void {
        
    }

    loadTable(){
        this.table = [];
        this.service.getPessoas().subscribe((response: Pessoa[]) => {
            this.table = response; 
            this.dataSource.data = this.table.sort((a,b) => a.nome.localeCompare(b.nome));
            // console.log('resposta');
            // console.log(this.dataSource);
        });
    }

    hasDataSource():boolean{
        return this.table.length > 0 ? true : false;
    }

    openDialogPessoaInsert(){
        this.openDialog(new Pessoa(),TypeEnum.insert);
    }

    openDialogPessoaEdit(pessoa:Pessoa){
        this.openDialog(pessoa,TypeEnum.edit);
    }

    openDialogPessoaDelete(pessoa:Pessoa){
        this.openDialog(pessoa,TypeEnum.delete);
    }

    openDialog(pessoa:Pessoa,type:string) {
        let dialogRef;
        dialogRef = this.dialog.open(ModalPessoaComponent,  {
          width: '90%', // Define a largura do componente dialog
          height: '80%',
          data : {
              'pessoa': pessoa,
              'type' : type
          }
        });
    }

}