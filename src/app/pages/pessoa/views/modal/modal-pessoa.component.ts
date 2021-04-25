import { Component, OnInit, SimpleChanges, OnChanges, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

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

    close() {
        this.dialogRef.close();
    }

    
}