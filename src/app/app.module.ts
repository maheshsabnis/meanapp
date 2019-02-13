import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ProductService } from "./services/app.products.service";
import { ProductServiceComponent } from "./productservicecomponent/app.productservice.component";

@NgModule({
  declarations: [ProductServiceComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [ProductService],
  bootstrap: [ProductServiceComponent]
})
export class AppModule {}
