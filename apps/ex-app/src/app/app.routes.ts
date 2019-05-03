import { NgModule } from "@angular/core";
import { LoadChildrenCallback, Route, Router, RouterModule } from "@angular/router";

export const routes: Route[] = [{
  path: "todos",
  loadChildren: () => {
    return {}
  }
}, {
  path: '',
  pathMatch: "full",
  redirectTo: 'todos'
}]


@NgModule({

  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutesModule {

  constructor(router: Router) {
    router.events.subscribe((event) => {
      console.log(event);
    })
  }
}
