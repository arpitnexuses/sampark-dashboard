import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import DistrictWiseReport from "@/components/district-wise-report"

export const metadata: Metadata = {
  title: "District Wise Report | Education Dashboard",
  description: "View and manage district-wise information",
}

export default function DistrictWiseReportPage() {
  return (
    <DashboardLayout>
      <DistrictWiseReport />
    </DashboardLayout>
  )
} 