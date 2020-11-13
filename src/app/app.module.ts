import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/tipo-eva/add/add.component';
import { ListarComponent } from './components/tipo-eva/listar/listar.component';
import { UpdateComponent } from './components/tipo-eva/update/update.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TipoevaService } from './services/tipoeva.service';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListarComponent,
    UpdateComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    TipoevaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
