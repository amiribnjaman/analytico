import Sidebar from "@/components/sidebar";
import DashboardTopbar from "@/components/dashboardTopbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64 h-screen shadow">
        <Sidebar />
      </aside>

      <div className="bg-[#F8F7FA] w-[80%]">
        <div className="px-6 py-4 ">
          {/* topbar  */}
          <DashboardTopbar />
          {children}
        </div>
      </div>
    </div>
  );
}
