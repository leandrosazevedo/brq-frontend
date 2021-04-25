import { Component, OnInit, SimpleChanges, OnChanges, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { TypeEnum } from 'src/app/shared/enum/type.enum';

@Component({
    selector: 'modal-pessoa',
    templateUrl: './modal-pessoa.component.html',
    styleUrls: ['./modal-pessoa.component.scss']
})
export class ModalPessoaComponent implements OnInit, OnChanges {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<ModalPessoaComponent>,
        public dialog: MatDialog
    ) { }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }

    ngOnInit(){
        
    }

    ngAfterViewInit(): void {
        
    }

    close(updateTable:boolean) {
        this.dialogRef.close({
            'updateTable' : updateTable
        });
    }

    retornoParametrosFormulario(returnParms){
        var hideModal = returnParms.hideModal;
        var updateTable = returnParms.updateTable;
        if(hideModal){
            this.close(updateTable);
        }
    }

    isDelete(){
        return this.data.type == TypeEnum.delete ? true : false;
    }
    
}