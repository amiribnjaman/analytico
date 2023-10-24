import React from 'react'
import Congrates from '@/components/ecommerceDashboardPage/Congrates'


export const metadata = {
    title: "eCommerce Dahboard - Analytico",
    description: "",
};
  
export default function ECommerceDashboard() {
  return (
    <div className="grid gap-y-5 mb-4 gap-6">
          {/* eCommerce dahsboard header */}
          <div className='grid grid-cols-3 gap-6'>
            <Congrates />
          </div>

    </div>
  )
}
