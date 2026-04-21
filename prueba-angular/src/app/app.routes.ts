import { Routes } from '@angular/router';
import { Registro } from './auth/registro/registro';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Home } from './home/home';
import { QuienesSomos } from './home/quienes-somos/quienes-somos';
import { Contacto } from './home/contacto/contacto';
import { DashboardCliente } from './dashboard-cliente/dashboard-cliente';
import { ListaProductos } from './dashboard-cliente/lista-productos/lista-productos';
import { Carrito } from './dashboard-cliente/carrito/carrito';
import { PedidosPendientes } from './dashboard-cliente/pedidos-pendientes/pedidos-pendientes';
import { DashboardAdminVentas } from './dashboard-admin-ventas/dashboard-admin-ventas';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'registro', component: Registro },
    { path: 'inicio-sesion', component: InicioSesion },
    { path: 'home', component: Home },
    { path: 'home/quienes-somos', component: QuienesSomos },
    { path: 'home/contacto', component: Contacto },
    { path: 'dashboard-cliente', component: DashboardCliente,
        children: [
        { path: 'lista-productos', component: ListaProductos },
        { path: 'carrito', component: Carrito },
        { path: 'pedidos-pendientes', component: PedidosPendientes }
        ]
    },
    { path: 'dashboard-admin-ventas', component: DashboardAdminVentas },
    { path: '**', redirectTo: '/home' }
];