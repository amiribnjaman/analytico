import AnalyticsSlider from "@/components/analyticsPage/AnalyticsSlider";
import SalesOverview from "@/components/analyticsPage/SalesOverview";
import RevenueGeneratedCard from "@/components/analyticsPage/RevenueGeneratedCard";
import RearningReportsCard from "@/components/analyticsPage/EarningReportsCard";
import SuportTracker from "@/components/analyticsPage/SuportTracker";
import SalesCountry from "@/components/analyticsPage/SalesCountry";
import TotalEarning from "@/components/analyticsPage/TotalEarning";
import MonthlyCampaign from '@/components/analyticsPage/MonthlyCampaign'
import SourceVisits from "@/components/analyticsPage/SourceVisits";

export default function Dashboard() {
  return (
    <div className="grid gap-y-5 mb-4">
      {/* Analytics top section */}
      <div className="grid grid-cols-2 gap-6">
        <AnalyticsSlider />
        <div className="grid grid-cols-2 gap-6">
          <SalesOverview />
          <RevenueGeneratedCard />
        </div>
      </div>

      {/* Analytics middle section */}
      <div className="grid grid-cols-2 gap-6">
        <RearningReportsCard />
        <SuportTracker />
      </div>

      {/* Analytics bottom top */}
      <div className="grid grid-cols-3 gap-6 ">
        <SalesCountry />
        <TotalEarning />
        <MonthlyCampaign />
      </div>

      {/* Anatytics bottom section */}
      <div className="grid grid-cols-3 grid-rows-3 gap-6">
        <SourceVisits />
        <div className="bg-[#00A76F] py-5 rounded px-3 col-span-2 row-span-1">
          ddd
        </div>
      </div>
    </div>
  );
}
