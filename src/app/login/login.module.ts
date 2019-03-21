import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

const dashboardRoutes: Routes = [
    { path: '', component: LoginComponent }
];

export const LoginRouteModule: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        LoginRouteModule
    ],
    providers: [
        LoginService
    ],
    bootstrap: []
})
export class LoginModule { }
