import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { JournalComponent } from './journal/journal.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'bio', component: BioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'news', component: NewsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
