import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HeaderComponent } from './components/header/header.component';
import { StatusBarComponent } from './common/components/status-bar/status-bar.component';
import { SubProgressBarComponent } from './common/components/sub-progress-bar/sub-progress-bar.component';
import { HomeConstructionComponent } from './home-details/components/home-construction/home-construction.component';
import { HomeProtectionComponent } from './home-protection/home-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDetailsComponent,
    HeaderComponent,
    StatusBarComponent,
    SubProgressBarComponent,
    HomeConstructionComponent,
    HomeProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
