import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'terms',
    loadChildren: () =>
      import('./terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: 'legal',
    loadChildren: () =>
      import('./legal/legal.module').then((m) => m.LegalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
