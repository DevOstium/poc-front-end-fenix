import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderController } from './header/header.controller';
import { FooterController } from './footer/footer.controller';
import { MenuController } from './menu/menu.controller';

@NgModule({
    declarations: [
        HeaderController,
        MenuController,
        FooterController
    ],
    exports: [
        HeaderController,
        MenuController,
        FooterController
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ],
    providers: [
    ]
})
export class CoreModule { }