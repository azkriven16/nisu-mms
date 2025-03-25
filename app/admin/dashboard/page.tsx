"use client";

import type React from "react";

import { BookOpen, Users } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Fake data for employees
const employeeData = {
    faculty: {
        count: 142,
        percentage: 57,
        departments: [
            { name: "Mathematics", count: 28 },
            { name: "Science", count: 32 },
            { name: "English", count: 25 },
            { name: "History", count: 18 },
            { name: "Arts", count: 15 },
            { name: "Physical Education", count: 12 },
            { name: "Foreign Languages", count: 12 },
        ],
        color: "bg-blue-500",
    },
    staff: {
        count: 85,
        percentage: 34,
        departments: [
            { name: "Administration", count: 20 },
            { name: "Counseling", count: 15 },
            { name: "IT Support", count: 10 },
            { name: "Maintenance", count: 18 },
            { name: "Food Service", count: 12 },
            { name: "Library", count: 5 },
            { name: "Security", count: 5 },
        ],
        color: "bg-green-500",
    },
    cos: {
        count: 20,
        percentage: 8,
        departments: [
            { name: "Superintendent Office", count: 3 },
            { name: "Curriculum Development", count: 5 },
            { name: "Human Resources", count: 4 },
            { name: "Finance", count: 4 },
            { name: "District Operations", count: 4 },
        ],
        color: "bg-amber-500",
    },
};

export default function DashboardPage() {
    // Calculate the maximum department count for scaling the bars
    const getMaxDepartmentCount = (type: "faculty" | "staff" | "cos") => {
        return Math.max(
            ...employeeData[type].departments.map((dept) => dept.count)
        );
    };

    return (
        <div className="min-h-screen w-full bg-background p-4 md:p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Manage your school staff and departments
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Employees
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">247</div>
                        <p className="text-xs text-muted-foreground">
                            +12 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Departments
                        </CardTitle>
                        <BuildingIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">15</div>
                        <p className="text-xs text-muted-foreground">
                            +2 new departments
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Faculty
                        </CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142</div>
                        <p className="text-xs text-muted-foreground">
                            57% of employees
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Staff
                        </CardTitle>
                        <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">85</div>
                        <p className="text-xs text-muted-foreground">
                            34% of employees
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            COs
                        </CardTitle>
                        <BuildingOfficeIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">20</div>
                        <p className="text-xs text-muted-foreground">
                            8% of employees
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Employee Distribution Visualization */}
            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Employee Distribution</CardTitle>
                        <CardDescription>
                            Breakdown of employees by department
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="faculty" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger
                                    value="faculty"
                                    className="flex items-center gap-2"
                                >
                                    <BookOpen className="h-4 w-4" /> Faculty
                                </TabsTrigger>
                                <TabsTrigger
                                    value="staff"
                                    className="flex items-center gap-2"
                                >
                                    <BriefcaseIcon className="h-4 w-4" /> Staff
                                </TabsTrigger>
                                <TabsTrigger
                                    value="cos"
                                    className="flex items-center gap-2"
                                >
                                    <BuildingOfficeIcon className="h-4 w-4" />{" "}
                                    COs
                                </TabsTrigger>
                            </TabsList>

                            {/* Faculty Tab */}
                            <TabsContent value="faculty" className="mt-4">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">
                                                Faculty Distribution
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                142 faculty members across 7
                                                departments
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                            <span className="text-sm">
                                                Faculty
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {employeeData.faculty.departments.map(
                                            (dept, index) => (
                                                <div
                                                    key={index}
                                                    className="space-y-1"
                                                >
                                                    <div className="flex justify-between text-sm">
                                                        <span>{dept.name}</span>
                                                        <span className="font-medium">
                                                            {dept.count} members
                                                        </span>
                                                    </div>
                                                    <div className="h-8 w-full bg-muted rounded-md overflow-hidden flex items-center">
                                                        <div
                                                            className="h-full bg-blue-500 rounded-l-md flex items-center justify-end pr-2"
                                                            style={{
                                                                width: `${
                                                                    (dept.count /
                                                                        getMaxDepartmentCount(
                                                                            "faculty"
                                                                        )) *
                                                                    100
                                                                }%`,
                                                            }}
                                                        >
                                                            {dept.count >=
                                                                15 && (
                                                                <span className="text-xs font-medium text-white">
                                                                    {Math.round(
                                                                        (dept.count /
                                                                            employeeData
                                                                                .faculty
                                                                                .count) *
                                                                            100
                                                                    )}
                                                                    %
                                                                </span>
                                                            )}
                                                        </div>
                                                        {dept.count < 15 && (
                                                            <span className="text-xs font-medium ml-2">
                                                                {Math.round(
                                                                    (dept.count /
                                                                        employeeData
                                                                            .faculty
                                                                            .count) *
                                                                        100
                                                                )}
                                                                %
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Staff Tab */}
                            <TabsContent value="staff" className="mt-4">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">
                                                Staff Distribution
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                85 staff members across 7
                                                departments
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-sm">
                                                Staff
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {employeeData.staff.departments.map(
                                            (dept, index) => (
                                                <div
                                                    key={index}
                                                    className="space-y-1"
                                                >
                                                    <div className="flex justify-between text-sm">
                                                        <span>{dept.name}</span>
                                                        <span className="font-medium">
                                                            {dept.count} members
                                                        </span>
                                                    </div>
                                                    <div className="h-8 w-full bg-muted rounded-md overflow-hidden flex items-center">
                                                        <div
                                                            className="h-full bg-green-500 rounded-l-md flex items-center justify-end pr-2"
                                                            style={{
                                                                width: `${
                                                                    (dept.count /
                                                                        getMaxDepartmentCount(
                                                                            "staff"
                                                                        )) *
                                                                    100
                                                                }%`,
                                                            }}
                                                        >
                                                            {dept.count >=
                                                                12 && (
                                                                <span className="text-xs font-medium text-white">
                                                                    {Math.round(
                                                                        (dept.count /
                                                                            employeeData
                                                                                .staff
                                                                                .count) *
                                                                            100
                                                                    )}
                                                                    %
                                                                </span>
                                                            )}
                                                        </div>
                                                        {dept.count < 12 && (
                                                            <span className="text-xs font-medium ml-2">
                                                                {Math.round(
                                                                    (dept.count /
                                                                        employeeData
                                                                            .staff
                                                                            .count) *
                                                                        100
                                                                )}
                                                                %
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* COs Tab */}
                            <TabsContent value="cos" className="mt-4">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">
                                                Central Office Staff
                                                Distribution
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                20 CO members across 5
                                                departments
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                            <span className="text-sm">COs</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {employeeData.cos.departments.map(
                                            (dept, index) => (
                                                <div
                                                    key={index}
                                                    className="space-y-1"
                                                >
                                                    <div className="flex justify-between text-sm">
                                                        <span>{dept.name}</span>
                                                        <span className="font-medium">
                                                            {dept.count} members
                                                        </span>
                                                    </div>
                                                    <div className="h-8 w-full bg-muted rounded-md overflow-hidden flex items-center">
                                                        <div
                                                            className="h-full bg-amber-500 rounded-l-md flex items-center justify-end pr-2"
                                                            style={{
                                                                width: `${
                                                                    (dept.count /
                                                                        getMaxDepartmentCount(
                                                                            "cos"
                                                                        )) *
                                                                    100
                                                                }%`,
                                                            }}
                                                        >
                                                            {dept.count >=
                                                                4 && (
                                                                <span className="text-xs font-medium text-white">
                                                                    {Math.round(
                                                                        (dept.count /
                                                                            employeeData
                                                                                .cos
                                                                                .count) *
                                                                            100
                                                                    )}
                                                                    %
                                                                </span>
                                                            )}
                                                        </div>
                                                        {dept.count < 4 && (
                                                            <span className="text-xs font-medium ml-2">
                                                                {Math.round(
                                                                    (dept.count /
                                                                        employeeData
                                                                            .cos
                                                                            .count) *
                                                                        100
                                                                )}
                                                                %
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>

            {/* Employee Distribution Pie Chart */}
            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Overall Employee Distribution</CardTitle>
                        <CardDescription>
                            Percentage breakdown of employee types
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center py-6">
                        <div className="relative w-48 h-48">
                            {/* Pie chart visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="w-full h-full"
                                >
                                    {/* Faculty slice - 57% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke="#3b82f6"
                                        strokeWidth="20"
                                        strokeDasharray={`${57 * 2.51} ${
                                            100 * 2.51 - 57 * 2.51
                                        }`}
                                        strokeDashoffset="0"
                                        transform="rotate(-90 50 50)"
                                    />

                                    {/* Staff slice - 34% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke="#22c55e"
                                        strokeWidth="20"
                                        strokeDasharray={`${34 * 2.51} ${
                                            100 * 2.51 - 34 * 2.51
                                        }`}
                                        strokeDashoffset={`${-(57 * 2.51)}`}
                                        transform="rotate(-90 50 50)"
                                    />

                                    {/* COs slice - 8% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="transparent"
                                        stroke="#f59e0b"
                                        strokeWidth="20"
                                        strokeDasharray={`${8 * 2.51} ${
                                            100 * 2.51 - 8 * 2.51
                                        }`}
                                        strokeDashoffset={`${-(
                                            (57 + 34) *
                                            2.51
                                        )}`}
                                        transform="rotate(-90 50 50)"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-bold">
                                        247
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        Total
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="ml-8 flex flex-col justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                <span>Faculty (57%)</span>
                                <span className="ml-auto font-medium">142</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                <span>Staff (34%)</span>
                                <span className="ml-auto font-medium">85</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                                <span>COs (8%)</span>
                                <span className="ml-auto font-medium">20</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
        </svg>
    );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    );
}

function BuildingOfficeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 2H5a2 2 0 0 0-2 2v19.5" />
            <path d="M5 8h14" />
            <path d="M5 14h14" />
            <path d="M8 5v16" />
            <path d="M14 5v16" />
            <path d="M10 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z" />
        </svg>
    );
}
