import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProdListComponent } from './prod-list.component';
import { ProdListRoutingModule } from './prod-list.routing';
import { ReactiveFormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [ProdListComponent],
  imports: [
    CommonModule,
    ProdListRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataViewModule,
    ButtonModule,
    ConfirmDialogModule,
    ],


})
export class ProdListModule { }
