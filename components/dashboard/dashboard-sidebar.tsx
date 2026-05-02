"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Bot,
  Briefcase,
  HelpCircle,
  Link as LinkIcon,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Leads", href: "/dashboard/leads", icon: Users },
  { label: "Meu Atendente", href: "/dashboard/assistant", icon: Bot },
  { label: "Serviços", href: "/dashboard/services", icon: Briefcase },
  { label: "Perguntas Frequentes", href: "/dashboard/faqs", icon: HelpCircle },
  { label: "Link de Atendimento", href: "/dashboard/chat-link", icon: LinkIcon },
  { label: "Configurações", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 flex flex-col bg-[var(--bg-surface)] border-r border-[var(--border-default)] h-full">
      <nav className="flex-1 py-4 px-2 space-y-0.5">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                isActive
                  ? "bg-[var(--accent-primary)] text-white font-medium"
                  : "text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text-primary)]"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
