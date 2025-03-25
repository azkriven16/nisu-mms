"use client";

import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Edit,
    FileBadge,
    FileText,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
    Users,
} from "lucide-react";

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
import { Card, CardContent } from "@/components/ui/card";

// Mock data for departments
const departments = [
    {
        id: "DEP001",
        name: "Mathematics",
        head: "Dr. Robert Johnson",
        email: "r.johnson@school.edu",
        employeeCount: 12,
        location: "Building A, Floor 2",
        status: "Active",
        established: "2005-08-15",
    },
    {
        id: "DEP002",
        name: "Science",
        head: "Dr. Emily Chen",
        email: "e.chen@school.edu",
        employeeCount: 18,
        location: "Building B, Floor 1",
        status: "Active",
        established: "2005-08-15",
    },
    {
        id: "DEP003",
        name: "English",
        head: "Prof. Sarah Williams",
        email: "s.williams@school.edu",
        employeeCount: 10,
        location: "Building A, Floor 3",
        status: "Active",
        established: "2006-02-20",
    },
    {
        id: "DEP004",
        name: "History",
        head: "Dr. Michael Brown",
        email: "m.brown@school.edu",
        employeeCount: 8,
        location: "Building C, Floor 1",
        status: "Active",
        established: "2007-09-05",
    },
    {
        id: "DEP005",
        name: "Physical Education",
        head: "Coach James Davis",
        email: "j.davis@school.edu",
        employeeCount: 6,
        location: "Sports Complex",
        status: "Active",
        established: "2008-01-10",
    },
    {
        id: "DEP006",
        name: "Computer Science",
        head: "Dr. Lisa Zhang",
        email: "l.zhang@school.edu",
        employeeCount: 14,
        location: "Building D, Floor 2",
        status: "Active",
        established: "2010-05-22",
    },
    {
        id: "DEP007",
        name: "Art & Design",
        head: "Prof. David Miller",
        email: "d.miller@school.edu",
        employeeCount: 7,
        location: "Arts Center",
        status: "Active",
        established: "2011-08-30",
    },
    {
        id: "DEP008",
        name: "Music",
        head: "Dr. Jennifer Lopez",
        email: "j.lopez@school.edu",
        employeeCount: 5,
        location: "Arts Center",
        status: "Active",
        established: "2012-03-15",
    },
    {
        id: "DEP009",
        name: "Foreign Languages",
        head: "Prof. Carlos Rodriguez",
        email: "c.rodriguez@school.edu",
        employeeCount: 9,
        location: "Building B, Floor 3",
        status: "Active",
        established: "2013-09-01",
    },
    {
        id: "DEP010",
        name: "Special Education",
        head: "Dr. Amanda Taylor",
        email: "a.taylor@school.edu",
        location: "Building A, Floor 1",
        status: "Active",
        established: "2014-01-20",
        employeeCount: 11,
    },
    {
        id: "DEP011",
        name: "Counseling",
        head: "Dr. Thomas Wilson",
        email: "t.wilson@school.edu",
        location: "Administration Building",
        status: "Active",
        established: "2015-07-10",
        employeeCount: 4,
    },
    {
        id: "DEP012",
        name: "Library Sciences",
        head: "Prof. Elizabeth Clark",
        email: "e.clark@school.edu",
        location: "Library Building",
        status: "Under Review",
        established: "2016-04-05",
        employeeCount: 3,
    },
];

export default function DepartmentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate statistics
    const totalDepartments = departments.length;
    const activeDepartments = departments.filter(
        (department) => department.status === "Active"
    ).length;
    const underReviewDepartments = departments.filter(
        (department) => department.status === "Under Review"
    ).length;
    const totalEmployees = departments.reduce((acc, department) => acc + department.employeeCount, 0);

    // Filter departments based on search term
    const filteredDepartments = departments.filter(
        (department) =>
            department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            department.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
            department.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            department.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDepartments = filteredDepartments.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const totalPages = Math.ceil(filteredDepartments.length / itemsPerPage);

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
                <h1 className="text-2xl font-bold tracking-tight">
                    Departments
                </h1>
                <Button className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    Add Department
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
                                Active Departments
                            </p>
                            <p className="text-2xl font-bold">
                                {activeDepartments}
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
                                Under Review
                            </p>
                            <p className="text-2xl font-bold">
                                {underReviewDepartments}
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
                        placeholder="Search departments..."
                        className="w-full pl-8"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // Reset to first page on search
                        }}
                    />
                </div>

                <div className="flex items-center gap-2">
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
                            <TableHead className="w-[80px]">ID</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="hidden md:table-cell">
                                Head
                            </TableHead>
                            <TableHead className="hidden lg:table-cell">
                                Email
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                                Employees
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Location
                            </TableHead>
                            <TableHead className="hidden lg:table-cell">
                                Established
                            </TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentDepartments.length > 0 ? (
                            currentDepartments.map((department) => (
                                <TableRow key={department.id}>
                                    <TableCell className="font-medium">
                                        {department.id}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-medium">
                                                {department.name}
                                            </span>
                                            <Badge
                                                variant={
                                                    department.status ===
                                                    "Active"
                                                        ? "default"
                                                        : "outline"
                                                }
                                                className="mt-1 w-fit"
                                            >
                                                {department.status}
                                            </Badge>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {department.head}
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {department.email}
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <div className="flex items-center gap-1">
                                            <Users className="h-4 w-4 text-muted-foreground" />
                                            <span>
                                                {department.employeeCount}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {department.location}
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {formatDate(department.established)}
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
                                                    <Users className="h-4 w-4" />
                                                    View Staff
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <Edit className="h-4 w-4" />
                                                    Edit Department
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                    Delete Department
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={8}
                                    className="h-24 text-center"
                                >
                                    No departments found.
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
                    {Math.min(indexOfLastItem, filteredDepartments.length)} of{" "}
                    {filteredDepartments.length} departments
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
