import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ShareComponent } from "./share/share.component";

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "share",
    component: ShareComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled',
        useHash: true
      }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
