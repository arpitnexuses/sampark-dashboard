"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { School, Users, GraduationCap, MapPin, ChevronRight, BookOpen, LineChart as LineChartIcon, Target, Award, UserCheck, Building2, Blocks } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data - replace with actual data
const districtData = [
  {
    district: "District 1",
    coverage: 85,
    schools: 800,
    students: 80000,
    teachers: 4000,
    blocks: 4,
    attendance: 93,
    performance: 86,
    infrastructureScore: 88,
    teacherTraining: 92,
    monthlyProgress: [
      { month: "Jan", students: 75000, teachers: 3800 },
      { month: "Feb", students: 76000, teachers: 3850 },
      { month: "Mar", students: 77500, teachers: 3900 },
      { month: "Apr", students: 79000, teachers: 3950 },
      { month: "May", students: 80000, teachers: 4000 },
    ],
    blockPerformance: [
      { block: "Block A", performance: 90, schools: 300 },
      { block: "Block B", performance: 82, schools: 250 },
      { block: "Block C", performance: 88, schools: 150 },
      { block: "Block D", performance: 80, schools: 100 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 87 },
      { subject: "Science", score: 84 },
      { subject: "English", score: 80 },
      { subject: "Social Studies", score: 83 },
    ],
    infrastructureMetrics: [
      { metric: "Classrooms", score: 90 },
      { metric: "Labs", score: 85 },
      { metric: "Libraries", score: 88 },
      { metric: "Playgrounds", score: 82 },
      { metric: "Digital Equipment", score: 78 },
    ]
  },
  {
    district: "District 2",
    coverage: 78,
    schools: 1200,
    students: 120000,
    teachers: 6000,
    blocks: 6,
    attendance: 91,
    performance: 84,
    infrastructureScore: 82,
    teacherTraining: 88,
    monthlyProgress: [
      { month: "Jan", students: 112000, teachers: 5700 },
      { month: "Feb", students: 114000, teachers: 5800 },
      { month: "Mar", students: 116000, teachers: 5850 },
      { month: "Apr", students: 118000, teachers: 5900 },
      { month: "May", students: 120000, teachers: 6000 },
    ],
    blockPerformance: [
      { block: "Block E", performance: 85, schools: 400 },
      { block: "Block F", performance: 80, schools: 300 },
      { block: "Block G", performance: 82, schools: 300 },
      { block: "Block H", performance: 78, schools: 200 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 85 },
      { subject: "Science", score: 82 },
      { subject: "English", score: 78 },
      { subject: "Social Studies", score: 81 },
    ],
    infrastructureMetrics: [
      { metric: "Classrooms", score: 85 },
      { metric: "Labs", score: 80 },
      { metric: "Libraries", score: 82 },
      { metric: "Playgrounds", score: 80 },
      { metric: "Digital Equipment", score: 75 },
    ]
  },
  {
    district: "District 3",
    coverage: 92,
    schools: 1000,
    students: 100000,
    teachers: 5000,
    blocks: 5,
    attendance: 95,
    performance: 89,
    infrastructureScore: 90,
    teacherTraining: 94,
    monthlyProgress: [
      { month: "Jan", students: 94000, teachers: 4700 },
      { month: "Feb", students: 95000, teachers: 4800 },
      { month: "Mar", students: 97000, teachers: 4850 },
      { month: "Apr", students: 98000, teachers: 4900 },
      { month: "May", students: 100000, teachers: 5000 },
    ],
    blockPerformance: [
      { block: "Block I", performance: 92, schools: 250 },
      { block: "Block J", performance: 90, schools: 250 },
      { block: "Block K", performance: 88, schools: 250 },
      { block: "Block L", performance: 86, schools: 250 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 90 },
      { subject: "Science", score: 88 },
      { subject: "English", score: 85 },
      { subject: "Social Studies", score: 87 },
    ],
    infrastructureMetrics: [
      { metric: "Classrooms", score: 92 },
      { metric: "Labs", score: 88 },
      { metric: "Libraries", score: 90 },
      { metric: "Playgrounds", score: 85 },
      { metric: "Digital Equipment", score: 82 },
    ]
  }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

export default function DistrictWiseReport() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">District Wise Report</h1>
          <p className="text-muted-foreground">Comprehensive overview of program implementation across districts</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Districts</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{districtData.length}</div>
              <p className="text-xs text-muted-foreground">Active districts</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {districtData.reduce((acc, curr) => acc + curr.schools, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Across all districts</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {districtData.reduce((acc, curr) => acc + curr.students, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Enrolled students</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Coverage</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(districtData.reduce((acc, curr) => acc + curr.coverage, 0) / districtData.length)}%
              </div>
              <p className="text-xs text-muted-foreground">Program coverage</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>District-wise Coverage</CardTitle>
              <CardDescription>Program coverage and performance across districts</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={districtData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="district" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="coverage" name="Coverage %" fill="#8884d8" />
                  <Bar dataKey="performance" name="Performance %" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure & Training</CardTitle>
              <CardDescription>District-wise infrastructure and teacher training scores</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={districtData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="district" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="infrastructureScore" name="Infrastructure Score" fill="#8884d8" />
                  <Bar dataKey="teacherTraining" name="Teacher Training" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>District-wise Statistics</CardTitle>
            <CardDescription>Click on any district to view detailed information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {districtData.map((district) => (
                <Dialog key={district.district}>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer transition-all duration-200">
                      <div>
                        <h3 className="font-medium">{district.district}</h3>
                        <p className="text-sm text-muted-foreground">
                          {district.blocks} blocks • {district.schools.toLocaleString()} schools • {district.students.toLocaleString()} students
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{district.coverage}%</div>
                          <div className="text-xs text-muted-foreground">Coverage</div>
                        </div>
                        <Progress value={district.coverage} className="w-24" />
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                    <div className="py-6">
                      <DialogHeader className="mb-6">
                        <DialogTitle className="text-2xl font-bold">{district.district}</DialogTitle>
                        <CardDescription className="text-base">District Overview</CardDescription>
                      </DialogHeader>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-blue-50">
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
                            <Award className="h-4 w-4 text-blue-500" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{district.performance}%</div>
                            <Progress value={district.performance} className="mt-2" />
                            <p className="text-xs text-blue-600 mt-1">Overall district performance</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-green-50">
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                            <UserCheck className="h-4 w-4 text-green-500" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-green-600">{district.attendance}%</div>
                            <Progress value={district.attendance} className="mt-2" />
                            <p className="text-xs text-green-600 mt-1">Average student attendance</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-purple-50">
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Coverage Status</CardTitle>
                            <Target className="h-4 w-4 text-purple-500" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-purple-600">{district.coverage}%</div>
                            <Progress value={district.coverage} className="mt-2" />
                            <p className="text-xs text-purple-600 mt-1">Program implementation</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mt-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Blocks className="h-5 w-5" />
                              Block-wise Performance
                            </CardTitle>
                            <CardDescription>Performance across blocks</CardDescription>
                          </CardHeader>
                          <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={district.blockPerformance}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="block" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Legend />
                                <Bar yAxisId="left" dataKey="performance" name="Performance %" fill="#8884d8" />
                                <Bar yAxisId="right" dataKey="schools" name="Schools" fill="#82ca9d" />
                              </BarChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <LineChartIcon className="h-5 w-5" />
                              Monthly Progress
                            </CardTitle>
                            <CardDescription>Student and teacher enrollment trends</CardDescription>
                          </CardHeader>
                          <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart
                                data={district.monthlyProgress}
                                margin={{
                                  top: 10,
                                  right: 30,
                                  left: 0,
                                  bottom: 0,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area
                                  type="monotone"
                                  dataKey="students"
                                  name="Students"
                                  stroke="#8884d8"
                                  fill="#8884d8"
                                  fillOpacity={0.3}
                                />
                                <Area
                                  type="monotone"
                                  dataKey="teachers"
                                  name="Teachers"
                                  stroke="#82ca9d"
                                  fill="#82ca9d"
                                  fillOpacity={0.3}
                                />
                              </AreaChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mt-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <BookOpen className="h-5 w-5" />
                              Subject Performance
                            </CardTitle>
                            <CardDescription>Subject-wise scores</CardDescription>
                          </CardHeader>
                          <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={district.subjectPerformance}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  outerRadius={100}
                                  fill="#8884d8"
                                  dataKey="score"
                                  nameKey="subject"
                                  label={({ subject, score }) => `${subject}: ${score}%`}
                                >
                                  {district.subjectPerformance.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                              </PieChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Building2 className="h-5 w-5" />
                              Infrastructure Metrics
                            </CardTitle>
                            <CardDescription>Facility-wise infrastructure scores</CardDescription>
                          </CardHeader>
                          <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={district.infrastructureMetrics}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                                layout="vertical"
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" domain={[0, 100]} />
                                <YAxis dataKey="metric" type="category" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="score" name="Score %" fill="#8884d8" />
                              </BarChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>
                      </div>

                      <Card className="mt-6">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <School className="h-5 w-5" />
                            District Statistics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Total Blocks</span>
                                <span className="font-semibold">{district.blocks}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Total Schools</span>
                                <span className="font-semibold">{district.schools.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Total Students</span>
                                <span className="font-semibold">{district.students.toLocaleString()}</span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Total Teachers</span>
                                <span className="font-semibold">{district.teachers.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Teacher Training</span>
                                <span className="font-semibold">{district.teacherTraining}%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Infrastructure Score</span>
                                <span className="font-semibold">{district.infrastructureScore}%</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 