import Sidebar from '../../components/sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64 h-screen shadow">
        <Sidebar />
      </aside>

      <div>
      {children}
      </div>
    
    </div>
  )
}
