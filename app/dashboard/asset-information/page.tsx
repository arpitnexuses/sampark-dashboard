import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import AssetInformation from "@/components/asset-information"

export const metadata: Metadata = {
  title: "Asset Information | Education Dashboard",
  description: "Track distribution and usage of program assets",
}

export default function AssetInformationPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-x-hidden">
        <AssetInformation />
      </div>
    </DashboardLayout>
  )
}

