import { Icons } from '@saas/ui/icons'
import type { SidebarData } from '../types'

export const sidebarData: SidebarData = {
    user: {
        name: 'Rodrigo',
        email: 'rodrigocan@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Shadcn Admin',
            logo: Icons.Command,
            plan: 'Vite + ShadcnUI',
        },
        {
            name: 'Acme Inc',
            logo: Icons.GalleryVerticalEnd,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: Icons.AudioWaveform,
            plan: 'Startup',
        },
    ],
    navGroups: [
        {
            title: 'Geral',
            items: [
                {
                    title: 'Início',
                    url: '/',
                    icon: Icons.LayoutDashboard,
                },
                {
                    title: 'Tarefas',
                    url: '/tasks',
                    icon: Icons.ClipboardList,
                },
                {
                    title: 'Aplicativos',
                    url: '/apps',
                    icon: Icons.Boxes,
                },
                {
                    title: 'Mensagens',
                    url: '/chats',
                    badge: '3',
                    icon: Icons.MessagesSquare,
                },
                {
                    title: 'Usuários',
                    url: '/users',
                    icon: Icons.Users,
                },
            ],
        },
        {
            title: 'Configurações e Suporte',
            items: [
                {
                    title: 'Configurações',
                    icon: Icons.Settings,
                    items: [
                        {
                            title: 'Perfil',
                            url: '/settings',
                            icon: Icons.UserCog,
                        },
                        {
                            title: 'Conta',
                            url: '/settings/account',
                            icon: Icons.Wrench,
                        },
                        {
                            title: 'Aparência',
                            url: '/settings/appearance',
                            icon: Icons.Palette,
                        },
                        {
                            title: 'Notificações',
                            url: '/settings/notifications',
                            icon: Icons.Bell,
                        },
                        {
                            title: 'Exibição',
                            url: '/settings/display',
                            icon: Icons.MonitorCheck,
                        },
                    ],
                },
                {
                    title: 'Suporte',
                    url: '/help-center',
                    icon: Icons.CircleHelp,
                },
            ],
        },
    ],
}