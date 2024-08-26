import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
})
export class SharedModule { }
