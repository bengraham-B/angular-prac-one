import { Routes } from '@angular/router';
import { ProjectPage } from './pages/project-page/project-page';
import { AboutPage } from './pages/about-page/about-page';
import { ProductPage } from './pages/product-page/product-page';

export const routes: Routes = [
    {
        path: 'projects',
        component: ProjectPage
    },
    {
        path: 'products',
        component: ProductPage
    },
    {
        path: 'about',
        component: AboutPage
    }
];
