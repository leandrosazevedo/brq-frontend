import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** COMPONENTS */
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
    declarations: [
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        LoadingComponent,
    ]
})
export class SharedModule { }
