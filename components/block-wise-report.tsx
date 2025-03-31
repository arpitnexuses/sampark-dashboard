"use client"

import { useState } from "react"
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
} from "recharts"
import { School, Users, GraduationCap, MapPin, ChevronRight, BookOpen, LineChart as LineChartIcon, Target, Award, UserCheck } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data - replace with actual data
const blockData = [
  {
    block: "Block A",
    district: "District 1",
    coverage: 90,
    schools: 300,
    students: 30000,
    teachers: 1500,
    attendance: 95,
    performance: 88,
    monthlyProgress: [
      { month: "Jan", students: 28000 },
      { month: "Feb", students: 28500 },
      { month: "Mar", students: 29000 },
      { month: "Apr", students: 29500 },
      { month: "May", students: 30000 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 85 },
      { subject: "Science", score: 82 },
      { subject: "English", score: 78 },
      { subject: "Social Studies", score: 80 },
    ]
  },
  {
    block: "Block B",
    district: "District 1",
    coverage: 80,
    schools: 500,
    students: 50000,
    teachers: 2500,
    attendance: 92,
    performance: 85,
    monthlyProgress: [
      { month: "Jan", students: 47000 },
      { month: "Feb", students: 48000 },
      { month: "Mar", students: 48500 },
      { month: "Apr", students: 49000 },
      { month: "May", students: 50000 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 82 },
      { subject: "Science", score: 80 },
      { subject: "English", score: 75 },
      { subject: "Social Studies", score: 78 },
    ]
  },
  {
    block: "Block C",
    district: "District 2",
    coverage: 70,
    schools: 400,
    students: 40000,
    teachers: 2000,
    attendance: 88,
    performance: 82,
    monthlyProgress: [
      { month: "Jan", students: 37000 },
      { month: "Feb", students: 38000 },
      { month: "Mar", students: 38500 },
      { month: "Apr", students: 39000 },
      { month: "May", students: 40000 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 80 },
      { subject: "Science", score: 78 },
      { subject: "English", score: 72 },
      { subject: "Social Studies", score: 76 },
    ]
  },
  {
    block: "Block D",
    district: "District 2",
    coverage: 85,
    schools: 800,
    students: 80000,
    teachers: 4000,
    attendance: 94,
    performance: 87,
    monthlyProgress: [
      { month: "Jan", students: 76000 },
      { month: "Feb", students: 77000 },
      { month: "Mar", students: 78000 },
      { month: "Apr", students: 79000 },
      { month: "May", students: 80000 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 88 },
      { subject: "Science", score: 85 },
      { subject: "English", score: 80 },
      { subject: "Social Studies", score: 83 },
    ]
  },
  {
    block: "Block E",
    district: "District 3",
    coverage: 75,
    schools: 600,
    students: 60000,
    teachers: 3000,
    attendance: 91,
    performance: 84,
    monthlyProgress: [
      { month: "Jan", students: 56000 },
      { month: "Feb", students: 57000 },
      { month: "Mar", students: 58000 },
      { month: "Apr", students: 59000 },
      { month: "May", students: 60000 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 83 },
      { subject: "Science", score: 81 },
      { subject: "English", score: 76 },
      { subject: "Social Studies", score: 79 },
    ]
  },
  {
    block: "Block F",
    district: "District 3",
    coverage: 88,
    schools: 700,
    students: 70000,
    teachers: 3500,
    attendance: 93,
    performance: 86,
    monthlyProgress: [
      { month: "Jan", students: 66000 },
      { month: "Feb", students: 67000 },
      { month: "Mar", students: 68000 },
      { month: "Apr", students: 69000 },
      { month: "May", students: 70000 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 86 },
      { subject: "Science", score: 84 },
      { subject: "English", score: 79 },
      { subject: "Social Studies", score: 82 },
    ]
  },
  {
    block: "Block G",
    district: "District 4",
    coverage: 82,
    schools: 550,
    students: 55000,
    teachers: 2750,
    attendance: 90,
    performance: 83,
    monthlyProgress: [
      { month: "Jan", students: 51000 },
      { month: "Feb", students: 52000 },
      { month: "Mar", students: 53000 },
      { month: "Apr", students: 54000 },
      { month: "May", students: 55000 },
    ],
    subjectPerformance: [
      { subject: "Math", score: 84 },
      { subject: "Science", score: 82 },
      { subject: "English", score: 77 },
      { subject: "Social Studies", score: 80 },
    ]
  }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function BlockWiseReport() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Block Wise Report</h1>
          <p className="text-muted-foreground">Comprehensive overview of program implementation across blocks</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blockData.length}</div>
              <p className="text-xs text-muted-foreground">Active blocks</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Schools</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(blockData.reduce((acc, curr) => acc + curr.schools, 0) / blockData.length)}
              </div>
              <p className="text-xs text-muted-foreground">Schools per block</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(blockData.reduce((acc, curr) => acc + curr.students, 0) / blockData.length).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Students per block</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Coverage</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(blockData.reduce((acc, curr) => acc + curr.coverage, 0) / blockData.length)}%
              </div>
              <p className="text-xs text-muted-foreground">Block coverage</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Block-wise Coverage</CardTitle>
              <CardDescription>Program coverage across blocks</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={blockData}
                  margin={{
                    top: 20,
                    right: 10,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="block" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, "Coverage"]} />
                  <Legend />
                  <Bar dataKey="coverage" fill="#8884d8" name="Coverage %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Block-wise Distribution</CardTitle>
              <CardDescription>Schools and students across blocks</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={blockData}
                  margin={{
                    top: 20,
                    right: 10,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="block" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value) => [value.toLocaleString(), "Count"]} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="schools" fill="#8884d8" name="Schools" />
                  <Bar yAxisId="right" dataKey="students" fill="#82ca9d" name="Students" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Block-wise Statistics</CardTitle>
            <CardDescription>Click on any block to view detailed information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blockData.map((block) => (
                <Dialog key={block.block}>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer transition-all duration-200">
                      <div>
                        <h3 className="font-medium">{block.block}</h3>
                        <p className="text-sm text-muted-foreground">
                          {block.district} • {block.schools} schools • {block.students.toLocaleString()} students
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{block.coverage}%</div>
                          <div className="text-xs text-muted-foreground">Coverage</div>
                        </div>
                        <Progress value={block.coverage} className="w-24" />
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                    <div className="py-6">
                      <DialogHeader className="mb-6">
                        <DialogTitle className="text-2xl font-bold">{block.block}</DialogTitle>
                        <CardDescription className="text-base">{block.district}</CardDescription>
                      </DialogHeader>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-blue-50">
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
                            <Award className="h-4 w-4 text-blue-500" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{block.performance}%</div>
                            <Progress value={block.performance} className="mt-2" />
                            <p className="text-xs text-blue-600 mt-1">Overall academic performance</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-green-50">
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                            <UserCheck className="h-4 w-4 text-green-500" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-green-600">{block.attendance}%</div>
                            <Progress value={block.attendance} className="mt-2" />
                            <p className="text-xs text-green-600 mt-1">Average student attendance</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-purple-50">
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Coverage Status</CardTitle>
                            <Target className="h-4 w-4 text-purple-500" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-purple-600">{block.coverage}%</div>
                            <Progress value={block.coverage} className="mt-2" />
                            <p className="text-xs text-purple-600 mt-1">Program implementation</p>
                          </CardContent>
                        </Card>
                      </div>

                      <Card className="mt-6">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            Performance Overview
                          </CardTitle>
                          <CardDescription>Subject-wise performance comparison</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[200px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={block.subjectPerformance}
                              margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="subject" />
                              <YAxis domain={[0, 100]} />
                              <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
                              <Legend />
                              <Bar dataKey="score" fill="#8884d8" name="Score %" />
                            </BarChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>

                      <div className="grid grid-cols-2 gap-6 mt-6">
                        <div className="space-y-6">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <School className="h-5 w-5" />
                                School Statistics
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Total Schools</span>
                                  <span className="font-semibold">{block.schools}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Students per School</span>
                                  <span className="font-semibold">{Math.round(block.students / block.schools)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Teachers per School</span>
                                  <span className="font-semibold">{Math.round(block.teachers / block.schools)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Student Attendance</span>
                                  <span className="font-semibold">{block.attendance}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Overall Performance</span>
                                  <span className="font-semibold">{block.performance}%</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Subject Performance
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={block.subjectPerformance}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="score"
                                    nameKey="subject"
                                    label={({ subject, score }) => `${subject}: ${score}%`}
                                  >
                                    {block.subjectPerformance.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <Tooltip />
                                  <Legend />
                                </PieChart>
                              </ResponsiveContainer>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="space-y-6">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <LineChartIcon className="h-5 w-5" />
                                Monthly Progress
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                  data={block.monthlyProgress}
                                  margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="month" />
                                  <YAxis />
                                  <Tooltip formatter={(value) => [value.toLocaleString(), "Students"]} />
                                  <Legend />
                                  <Line
                                    type="monotone"
                                    dataKey="students"
                                    stroke="#8884d8"
                                    name="Student Enrollment"
                                    strokeWidth={2}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                Block Coverage
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <Progress value={block.coverage} className="h-2" />
                                <p className="text-sm text-muted-foreground">
                                  {block.coverage}% of schools in {block.block} are currently covered under the program
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
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