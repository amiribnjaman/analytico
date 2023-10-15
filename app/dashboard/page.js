import AnalyticsSlider from "@/components/analyticsPage/analyticsSlider";
import SalesOverview from "@/components/analyticsPage/salesOverview";

export default function Dashboard() {
  return (
    <div className="grid gap-y-5 mb-4">
      {/* Analytics top section */}
      <div className="grid grid-cols-2 gap-6 h-[250px]">
        {/* <div className="bg-[#00A76F] py-5 rounded px-3">ddd</div> */}
        <AnalyticsSlider />

        <div className="grid grid-cols-2 gap-6">
          <SalesOverview />
          <div className="bg-[#00A76F] py-3 rounded px-2">ddd</div>
        </div>
      </div>
      {/* Analytics middle section */}
      <div className="grid grid-cols-2 gap-6 h-[250px]">
        <div className="bg-[#00A76F] py-5 rounded px-3">ddd</div>
        <div className="bg-[#00A76F] py-5 rounded px-3">ddd</div>
      </div>

      {/* Analytics top bottom */}
      <div className="grid grid-cols-3 gap-6 h-[300px]">
        <div className="bg-[#00A76F] py-5 rounded px-3">ddd</div>
        <div className="bg-[#00A76F] py-5 rounded px-3">ddd</div>
        <div className="bg-[#00A76F] py-5 rounded px-3">ddd</div>
      </div>

      {/* Anatytics bottom section */}
      <div className="grid grid-cols-3 grid-rows-3 gap-6 h-[300px]">
        <div className="bg-[#00A76F] py-5 rounded px-3 col-span-1 row-span-2">
          ddd
        </div>
        <div className="bg-[#00A76F] py-5 rounded px-3 col-span-2 row-span-1">
          ddd
        </div>
      </div>
    </div>
  );
}
