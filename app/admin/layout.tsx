import type * as React from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/admin/dashboard/sidebar";
import { DashboardHeader } from "@/components/admin/dashboard/header";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <SidebarInset>
                <div className="flex min-h-screen flex-col">
                    <DashboardHeader />
                    <main className="flex-1 p-4 md:p-6">{children}</main>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
