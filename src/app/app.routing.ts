import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'dashboard/:isbn', component: ResultComponent },
]

export const AppRouting = RouterModule.forRoot(appRoutes);
