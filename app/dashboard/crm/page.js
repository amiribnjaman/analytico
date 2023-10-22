import Sales from "@/components/crmPage/Sales";
import Sessions from "@/components/crmPage/Sessions";
import TotalCard from "@/components/crmPage/TotalCard";
import RevenueGrowth from "@/components/crmPage/RevenueGrowth";
import EarningReport from "@/components/crmPage/EarningReport";

export const metadata = {
  title: "Customer Management - Analytico",
  description: "",
};

export default function CRM() {
  return (
    <div className="grid gap-y-5 mb-4 gap-6">
      {/* CRM TOP SECTION */}
      <div className="grid grid-cols-6 gap-6">
        <div className="grid col-span-4 gap-6">
          {/* CRM TOP LEFT SECTION */}
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1">
              <Sales />
            </div>
            <div className="col-span-1">
              <Sessions />
            </div>
            {/* Total profit */}
            <div className="col-span-1">
              <TotalCard
                svg={
                  <svg
                    className="bg-[#FCE5E6] w-9 h-9 rounded text-[#EA5455] p-2"
                    fill="currentColor"
                    strokeWidth={0.5}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                  </svg>
                }
                title={"Total Profit"}
                subTitle={"Last week"}
                amount={"1.28k"}
                growth={"-12.2%"}
              />
            </div>
            {/* Total sales */}
            <div className="col-span-1">
              <TotalCard
                svg={
                  <svg
                    className="bg-[#D9F8FC] w-9 h-9 rounded text-[#00CFE8] p-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    fill="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                }
                title={"Total Sales"}
                subTitle={"Last week"}
                amount={"$ 4,673"}
                growth={"+25.2%"}
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-2 gap-6">
          <div>
            <RevenueGrowth />
          </div>
        </div>
      </div>

      {/* CRM MIDDLE SECTION */}
      <div className="grid gap-6 grid-cols-3">
        {/* CRM EARNING REPORT */}
        <div className="col-span-2">
          <EarningReport />
        </div>
      </div>
    </div>
  );
}
