import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** COMPONENTS */
import { PessoaComponent } from './views/pessoa.component';

/** SERVICE */
import { PessoaService } from './pessoa.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { TablePessoaComponent } from './views/table/table-pessoa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalPessoaComponent } from './views/modal/modal-pessoa.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { NgxMaskModule } from 'ngx-mask';
import { DeletarComponent } from './views/deletar/deletar.component';

@NgModule({
  declarations: [
    PessoaComponent,
    TablePessoaComponent,
    ModalPessoaComponent,
    FormularioComponent,
    DeletarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    SharedModule,
    RouterModule,
    MatDialogModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    PessoaComponent,
    TablePessoaComponent,
    ModalPessoaComponent,
    FormularioComponent,
    DeletarComponent
  ],
  providers: [PessoaService],
})
export class PessoaModule {}
