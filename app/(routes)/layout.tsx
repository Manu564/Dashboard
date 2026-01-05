import { NavBar } from "./components/NavBar";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "./components/ui/theme-provider";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden xl:block w-80 f-full xl:fixed">
        <Sidebar />
      </div>
      <div className="w-full xl:ml-80">
        <NavBar />
        <div className="p-6 bg[#fafbfc] dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
}
