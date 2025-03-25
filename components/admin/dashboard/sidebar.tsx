"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    FileText,
    Home,
    LayoutDashboard,
    Package,
    Settings,
    Users,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";

// Navigation items for the sidebar
const navItems = [
    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Employees",
        href: "/admin/employees",
        icon: BarChart3,
    },
    {
        title: "Departments",
        href: "/admin/departments",
        icon: Users,
    },
    {
        title: "Leaves",
        href: "/admin/leaves",
        icon: Package,
    },
    {
        title: "Documents",
        href: "/admin/documents",
        icon: FileText,
    },
    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className="border-b border-sidebar-border p-4">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 font-semibold"
                >
                    <LayoutDashboard className="h-6 w-6" />
                    <span className="text-xl">NISU</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton asChild isActive={isActive}>
                                    <Link href={item.href}>
                                        <item.icon className="h-5 w-5" />
                                        <span className="text-base">
                                            {item.title}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t border-sidebar-border p-4">
                <div className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} NISU.
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
