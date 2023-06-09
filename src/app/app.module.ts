import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerModule } from './customer/customer.module';
import { NgMaterialModuleModule } from './ng-material-module/ng-material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SnackbarComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomerModule,
    NgMaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
