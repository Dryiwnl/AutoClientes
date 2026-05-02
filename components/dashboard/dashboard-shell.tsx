import { DashboardNavbar } from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";

interface DashboardShellProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export function DashboardShell({ children, pageTitle }: DashboardShellProps) {
  return (
    <div className="flex flex-col h-screen bg-[var(--bg-base)]">
      <DashboardNavbar pageTitle={pageTitle} />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
