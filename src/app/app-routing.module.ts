import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/shared/not-found/not-found.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';


const routes: Routes = [
{path:'',component:RecipesComponent},
{path:'shopping-list',component:ShoppingListComponent},
{path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
