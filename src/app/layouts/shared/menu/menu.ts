import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'LEAN',
        isTitle: true
    },
    {
        label: 'Inicio',
        icon: 'home',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Calendario',
        icon: 'calendar',
        link: '/apps-calendar',
    },
    {
        label: 'Empresas',
        icon: 'briefcase',
        link: '/empresas',
    },
    {
        label: 'Clientes',
        icon: 'users',
        link: '/clientes',
    },
    {
        label: 'Proyectos',
        icon: 'github',
        link: '/proyectos',
    },
     {
        label: 'Usuarios',
        icon: 'user',
        link: '/usuarios',
    },
    {
        label: 'Configuración',
        icon: 'settings',
        link: '/configuracion',
    }
  
];
