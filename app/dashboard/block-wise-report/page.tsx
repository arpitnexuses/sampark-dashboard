import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import BlockWiseReportContent from "./block-wise-report-content"

export const metadata: Metadata = {
  title: "Block Wise Report | Education Dashboard",
  description: "View and manage block-wise information",
}

export default function BlockWiseReportPage() {
  return (
    <DashboardLayout>
      <BlockWiseReportContent />
    </DashboardLayout>
  )
} 