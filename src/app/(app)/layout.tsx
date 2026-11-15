import { AppShell } from "@/components/app-shell"
import { SiteHeader } from "@/components/site-header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppShell header={<SiteHeader />}>{children}</AppShell>
}
