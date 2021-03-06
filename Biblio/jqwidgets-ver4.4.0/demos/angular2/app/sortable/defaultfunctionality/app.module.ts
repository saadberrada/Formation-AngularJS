import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxSortableComponent } from 'components/angular_jqxsortable';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxSortableComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

