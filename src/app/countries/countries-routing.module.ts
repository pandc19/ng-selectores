import { RouterModule, Routes } from "@angular/router";
import { SelectorPagesComponent } from "./pages/selector-pages/selector-pages.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selector', component: SelectorPagesComponent },
      { path: '**', redirectTo: 'selector' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule { }
