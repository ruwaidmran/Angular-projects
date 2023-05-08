
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { httModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemsComponent } from './recipes/recipes-list/recipes-items/recipes-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElemntsComponent } from './server-elemnts/server-elemnts.component';
@NgModule({
declarations: [AppComponent,ServersComponent,  
  ServerComponent,  
  SuccessAlertComponent, 
  WarningAlertComponent, 
  RecipesComponent,  
  RecipesListComponent, 
  RecipesDetailsComponent,
  RecipesItemsComponent, 
  ShoppingListComponent, 
  ShoppingEditComponent, 
  HeaderComponent,  
  CockpitComponent, ServerElemntsComponent,  
  
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule ,
    // httpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
