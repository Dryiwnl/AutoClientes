import { Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardNavbarProps {
  pageTitle?: string;
}

export function DashboardNavbar({ pageTitle }: DashboardNavbarProps) {
  return (
    <header className="h-14 flex items-center justify-between px-6 bg-[var(--bg-surface)] border-b border-[var(--border-default)] shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-base font-semibold text-[var(--text-primary)] tracking-tight">
          AutoClient
        </span>
        {pageTitle && (
          <>
            <span className="text-[var(--border-default)]">/</span>
            <span className="text-sm text-[var(--text-muted)]">{pageTitle}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Configurações</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
          <User className="h-4 w-4" />
          <span className="sr-only">Perfil</span>
        </Button>
      </div>
    </header>
  );
}
