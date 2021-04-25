import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PessoaModule } from './pages/pessoa/pessoa.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CpfPipe } from './shared/components/pipes/cpf.pipe';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CpfPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
    MatDialogModule,

    /** Modules */
    ReactiveFormsModule,
    MatTableModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    PessoaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
