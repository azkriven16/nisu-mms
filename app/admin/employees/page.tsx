"use client";

import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Download,
    Edit,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
    UserRound,
    FileText,
    FileBadge,
    Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for employees
const employees = [
    {
        id: "EMP001",
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        department: "Engineering",
        position: "Senior Developer",
        status: "Active",
        joinDate: "2021-05-12",
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
    {
        id: "EMP002",
        name: "Samantha Lee",
        email: "samantha.lee@example.com",
        department: "Marketing",
        position: "Marketing Manager",
        status: "Active",
        joinDate: "2020-11-28",
        avatar: "/placeholder.svg?height=40&width=40&text=SL",
    },
    {
        id: "EMP003",
        name: "Michael Chen",
        email: "michael.chen@example.com",
        department: "Finance",
        position: "Financial Analyst",
        status: "On Leave",
        joinDate: "2022-01-15",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    {
        id: "EMP004",
        name: "Emily Rodriguez",
        email: "emily.rodriguez@example.com",
        department: "Human Resources",
        position: "HR Specialist",
        status: "Active",
        joinDate: "2021-08-03",
        avatar: "/placeholder.svg?height=40&width=40&text=ER",
    },
    {
        id: "EMP005",
        name: "David Kim",
        email: "david.kim@example.com",
        department: "Engineering",
        position: "Frontend Developer",
        status: "Active",
        joinDate: "2022-03-20",
        avatar: "/placeholder.svg?height=40&width=40&text=DK",
    },
    {
        id: "EMP006",
        name: "Jessica Taylor",
        email: "jessica.taylor@example.com",
        department: "Product",
        position: "Product Manager",
        status: "Active",
        joinDate: "2021-02-14",
        avatar: "/placeholder.svg?height=40&width=40&text=JT",
    },
    {
        id: "EMP007",
        name: "Ryan Patel",
        email: "ryan.patel@example.com",
        department: "Sales",
        position: "Sales Representative",
        status: "Inactive",
        joinDate: "2020-09-10",
        avatar: "/placeholder.svg?height=40&width=40&text=RP",
    },
    {
        id: "EMP008",
        name: "Olivia Wilson",
        email: "olivia.wilson@example.com",
        department: "Customer Support",
        position: "Support Specialist",
        status: "Active",
        joinDate: "2022-05-05",
        avatar: "/placeholder.svg?height=40&width=40&text=OW",
    },
    {
        id: "EMP009",
        name: "Daniel Martinez",
        email: "daniel.martinez@example.com",
        department: "Engineering",
        position: "Backend Developer",
        status: "Active",
        joinDate: "2021-11-11",
        avatar: "/placeholder.svg?height=40&width=40&text=DM",
    },
    {
        id: "EMP010",
        name: "Sophia Brown",
        email: "sophia.brown@example.com",
        department: "Design",
        position: "UI/UX Designer",
        status: "Active",
        joinDate: "2022-02-28",
        avatar: "/placeholder.svg?height=40&width=40&text=SB",
    },
    {
        id: "EMP011",
        name: "James Wilson",
        email: "james.wilson@example.com",
        department: "Engineering",
        position: "DevOps Engineer",
        status: "Active",
        joinDate: "2021-07-15",
        avatar: "/placeholder.svg?height=40&width=40&text=JW",
    },
    {
        id: "EMP012",
        name: "Emma Davis",
        email: "emma.davis@example.com",
        department: "Marketing",
        position: "Content Strategist",
        status: "On Leave",
        joinDate: "2022-04-10",
        avatar: "/placeholder.svg?height=40&width=40&text=ED",
    },
];

export default function EmployeesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate statistics
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(
        (employee) => employee.status === "Active"
    ).length;
    const onLeaveEmployees = employees.filter(
        (employee) => employee.status === "On Leave"
    ).length;
    const totalDepartments = [
        ...new Set(employees.map((employee) => employee.department)),
    ].length;

    // Filter employees based on search term
    const filteredEmployees = employees.filter(
        (employee) =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.department
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            employee.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEmployees = filteredEmployees.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Format date to a more readable format
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(date);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
                <Button className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    Add Employee
                </Button>
            </div>
            {/* Statistics Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Total Departments
                            </p>
                            <p className="text-2xl font-bold">
                                {totalDepartments}
                            </p>
                        </div>
                        <div className="rounded-full bg-primary/10 p-2">
                            <FileText className="h-5 w-5 text-primary" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Active Employees
                            </p>
                            <p className="text-2xl font-bold">
                                {activeEmployees}
                            </p>
                        </div>
                        <div className="rounded-full bg-green-500/10 p-2">
                            <FileBadge className="h-5 w-5 text-green-500" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                On Leave
                            </p>
                            <p className="text-2xl font-bold">
                                {onLeaveEmployees}
                            </p>
                        </div>
                        <div className="rounded-full bg-yellow-500/10 p-2">
                            <FileText className="h-5 w-5 text-yellow-500" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Total Employees
                            </p>
                            <p className="text-2xl font-bold">
                                {totalEmployees}
                            </p>
                        </div>
                        <div className="rounded-full bg-blue-500/10 p-2">
                            <Users className="h-5 w-5 text-blue-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search employees..."
                        className="w-full pl-8"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // Reset to first page on search
                        }}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                    </Button>
                    <Select
                        value={itemsPerPage.toString()}
                        onValueChange={(value) => {
                            setItemsPerPage(Number(value));
                            setCurrentPage(1); // Reset to first page when changing items per page
                        }}
                    >
                        <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="5 per page" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5">5 per page</SelectItem>
                            <SelectItem value="10">10 per page</SelectItem>
                            <SelectItem value="20">20 per page</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">ID</TableHead>
                            <TableHead className="min-w-[180px]">
                                Employee
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Academic Rank
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Educational Attainment
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                                Status
                            </TableHead>
                            <TableHead className="hidden lg:table-cell">
                                Join Date
                            </TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentEmployees.length > 0 ? (
                            currentEmployees.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell className="font-medium">
                                        {employee.id}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage
                                                    src={employee.avatar}
                                                    alt={employee.name}
                                                />
                                                <AvatarFallback>
                                                    {employee.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    {employee.name}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {employee.email}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {employee.department}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {employee.position}
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge
                                            variant={
                                                employee.status === "Active"
                                                    ? "default"
                                                    : employee.status ===
                                                      "On Leave"
                                                    ? "outline"
                                                    : "secondary"
                                            }
                                        >
                                            {employee.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {formatDate(employee.joinDate)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                    Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <UserRound className="h-4 w-4" />
                                                    View Profile
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <Edit className="h-4 w-4" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="h-24 text-center"
                                >
                                    No employees found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                    Showing {indexOfFirstItem + 1}-
                    {Math.min(indexOfLastItem, filteredEmployees.length)} of{" "}
                    {filteredEmployees.length} employees
                </div>
                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous Page</span>
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                            (page) =>
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 1 &&
                                    page <= currentPage + 1)
                        )
                        .map((page, index, array) => {
                            // Add ellipsis
                            if (index > 0 && page - array[index - 1] > 1) {
                                return (
                                    <div
                                        key={`ellipsis-${page}`}
                                        className="flex items-center"
                                    >
                                        <span className="px-2">...</span>
                                        <Button
                                            variant={
                                                currentPage === page
                                                    ? "default"
                                                    : "outline"
                                            }
                                            size="icon"
                                            onClick={() =>
                                                handlePageChange(page)
                                            }
                                        >
                                            {page}
                                        </Button>
                                    </div>
                                );
                            }

                            return (
                                <Button
                                    key={page}
                                    variant={
                                        currentPage === page
                                            ? "default"
                                            : "outline"
                                    }
                                    size="icon"
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </Button>
                            );
                        })}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next Page</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
