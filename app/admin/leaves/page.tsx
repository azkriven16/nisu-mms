"use client";

import { useState } from "react";
import {
    Calendar,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    Download,
    Eye,
    Filter,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
    X,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";

// Mock data for leaves
const leaves = [
    {
        id: "LV001",
        employeeId: "EMP001",
        employeeName: "Alex Johnson",
        department: "Mathematics",
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
        leaveType: "Sick Leave",
        startDate: "2023-05-10",
        endDate: "2023-05-12",
        duration: 3,
        reason: "Medical appointment and recovery",
        status: "Approved",
        approvedBy: "Dr. Robert Johnson",
        approvedOn: "2023-05-08",
    },
    {
        id: "LV002",
        employeeId: "EMP002",
        employeeName: "Samantha Lee",
        department: "Marketing",
        avatar: "/placeholder.svg?height=40&width=40&text=SL",
        leaveType: "Vacation",
        startDate: "2023-06-15",
        endDate: "2023-06-25",
        duration: 11,
        reason: "Family vacation",
        status: "Approved",
        approvedBy: "Dr. Emily Chen",
        approvedOn: "2023-05-20",
    },
    {
        id: "LV003",
        employeeId: "EMP003",
        employeeName: "Michael Chen",
        department: "Science",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
        leaveType: "Personal Leave",
        startDate: "2023-05-18",
        endDate: "2023-05-18",
        duration: 1,
        reason: "Personal appointment",
        status: "Pending",
        approvedBy: null,
        approvedOn: null,
    },
    {
        id: "LV004",
        employeeId: "EMP004",
        employeeName: "Emily Rodriguez",
        department: "Human Resources",
        avatar: "/placeholder.svg?height=40&width=40&text=ER",
        leaveType: "Maternity Leave",
        startDate: "2023-07-01",
        endDate: "2023-10-01",
        duration: 93,
        reason: "Maternity leave",
        status: "Approved",
        approvedBy: "Dr. Robert Johnson",
        approvedOn: "2023-05-15",
    },
    {
        id: "LV005",
        employeeId: "EMP005",
        employeeName: "David Kim",
        department: "Computer Science",
        avatar: "/placeholder.svg?height=40&width=40&text=DK",
        leaveType: "Conference",
        startDate: "2023-06-05",
        endDate: "2023-06-09",
        duration: 5,
        reason: "Attending educational technology conference",
        status: "Approved",
        approvedBy: "Dr. Lisa Zhang",
        approvedOn: "2023-05-25",
    },
    {
        id: "LV006",
        employeeId: "EMP006",
        employeeName: "Jessica Taylor",
        department: "English",
        avatar: "/placeholder.svg?height=40&width=40&text=JT",
        leaveType: "Sick Leave",
        startDate: "2023-05-22",
        endDate: "2023-05-23",
        duration: 2,
        reason: "Flu recovery",
        status: "Pending",
        approvedBy: null,
        approvedOn: null,
    },
    {
        id: "LV007",
        employeeId: "EMP007",
        employeeName: "Ryan Patel",
        department: "Physical Education",
        avatar: "/placeholder.svg?height=40&width=40&text=RP",
        leaveType: "Personal Leave",
        startDate: "2023-05-30",
        endDate: "2023-05-30",
        duration: 1,
        reason: "Family event",
        status: "Rejected",
        approvedBy: "Coach James Davis",
        approvedOn: "2023-05-28",
    },
    {
        id: "LV008",
        employeeId: "EMP008",
        employeeName: "Olivia Wilson",
        department: "Art & Design",
        avatar: "/placeholder.svg?height=40&width=40&text=OW",
        leaveType: "Workshop",
        startDate: "2023-06-12",
        endDate: "2023-06-14",
        duration: 3,
        reason: "Attending art workshop",
        status: "Approved",
        approvedBy: "Prof. David Miller",
        approvedOn: "2023-05-30",
    },
    {
        id: "LV009",
        employeeId: "EMP009",
        employeeName: "Daniel Martinez",
        department: "Music",
        avatar: "/placeholder.svg?height=40&width=40&text=DM",
        leaveType: "Vacation",
        startDate: "2023-07-10",
        endDate: "2023-07-21",
        duration: 12,
        reason: "Summer vacation",
        status: "Pending",
        approvedBy: null,
        approvedOn: null,
    },
    {
        id: "LV010",
        employeeId: "EMP010",
        employeeName: "Sophia Brown",
        department: "History",
        avatar: "/placeholder.svg?height=40&width=40&text=SB",
        leaveType: "Sick Leave",
        startDate: "2023-05-15",
        endDate: "2023-05-16",
        duration: 2,
        reason: "Migraine",
        status: "Approved",
        approvedBy: "Dr. Michael Brown",
        approvedOn: "2023-05-14",
    },
    {
        id: "LV011",
        employeeId: "EMP011",
        employeeName: "James Wilson",
        department: "Mathematics",
        avatar: "/placeholder.svg?height=40&width=40&text=JW",
        leaveType: "Personal Leave",
        startDate: "2023-06-02",
        endDate: "2023-06-02",
        duration: 1,
        reason: "Personal appointment",
        status: "Approved",
        approvedBy: "Dr. Robert Johnson",
        approvedOn: "2023-05-31",
    },
    {
        id: "LV012",
        employeeId: "EMP012",
        employeeName: "Emma Davis",
        department: "Foreign Languages",
        avatar: "/placeholder.svg?height=40&width=40&text=ED",
        leaveType: "Conference",
        startDate: "2023-06-20",
        endDate: "2023-06-23",
        duration: 4,
        reason: "Language teaching conference",
        status: "Pending",
        approvedBy: null,
        approvedOn: null,
    },
];

// Leave types for filtering
const leaveTypes = [
    "Sick Leave",
    "Vacation",
    "Personal Leave",
    "Maternity Leave",
    "Conference",
    "Workshop",
    "Other",
];

// Status options for filtering
const statusOptions = ["Approved", "Pending", "Rejected"];

export default function LeavesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [filters, setFilters] = useState({
        leaveTypes: [] as string[],
        status: [] as string[],
        dateRange: null as DateRange | null,
    });

    // Filter leaves based on search term and filters
    const filteredLeaves = leaves.filter((leave) => {
        // Search filter
        const matchesSearch =
            leave.employeeName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            leave.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            leave.leaveType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            leave.status.toLowerCase().includes(searchTerm.toLowerCase());

        // Leave type filter
        const matchesLeaveType =
            filters.leaveTypes.length === 0 ||
            filters.leaveTypes.includes(leave.leaveType);

        // Status filter
        const matchesStatus =
            filters.status.length === 0 ||
            filters.status.includes(leave.status);

        // Date range filter
        let matchesDateRange = true;
        if (filters.dateRange && filters.dateRange.from) {
            const startDate = new Date(leave.startDate);
            const from = new Date(filters.dateRange.from);
            from.setHours(0, 0, 0, 0);

            if (filters.dateRange.to) {
                const to = new Date(filters.dateRange.to);
                to.setHours(23, 59, 59, 999);
                matchesDateRange = startDate >= from && startDate <= to;
            } else {
                matchesDateRange = startDate >= from;
            }
        }

        return (
            matchesSearch &&
            matchesLeaveType &&
            matchesStatus &&
            matchesDateRange
        );
    });

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentLeaves = filteredLeaves.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const totalPages = Math.ceil(filteredLeaves.length / itemsPerPage);

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

    // Toggle leave type filter
    const toggleLeaveTypeFilter = (leaveType: string) => {
        setFilters((prev) => {
            const newLeaveTypes = prev.leaveTypes.includes(leaveType)
                ? prev.leaveTypes.filter((type) => type !== leaveType)
                : [...prev.leaveTypes, leaveType];

            return {
                ...prev,
                leaveTypes: newLeaveTypes,
            };
        });
        setCurrentPage(1); // Reset to first page when filtering
    };

    // Toggle status filter
    const toggleStatusFilter = (status: string) => {
        setFilters((prev) => {
            const newStatus = prev.status.includes(status)
                ? prev.status.filter((s) => s !== status)
                : [...prev.status, status];

            return {
                ...prev,
                status: newStatus,
            };
        });
        setCurrentPage(1); // Reset to first page when filtering
    };

    // Set date range filter
    const setDateRangeFilter = (range: DateRange | undefined) => {
        setFilters((prev) => ({
            ...prev,
            dateRange: range || null,
        }));
        setCurrentPage(1); // Reset to first page when filtering
    };

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            leaveTypes: [],
            status: [],
            dateRange: null,
        });
        setCurrentPage(1); // Reset to first page when clearing filters
    };

    // Calculate leave statistics
    const totalLeaves = leaves.length;
    const approvedLeaves = leaves.filter(
        (leave) => leave.status === "Approved"
    ).length;
    const pendingLeaves = leaves.filter(
        (leave) => leave.status === "Pending"
    ).length;
    const rejectedLeaves = leaves.filter(
        (leave) => leave.status === "Rejected"
    ).length;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight">
                    Leave Management
                </h1>
                <Button className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    Request Leave
                </Button>
            </div>

            {/* Statistics Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Total Leaves
                            </p>
                            <p className="text-2xl font-bold">{totalLeaves}</p>
                        </div>
                        <div className="rounded-full bg-primary/10 p-2">
                            <Calendar className="h-5 w-5 text-primary" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Approved
                            </p>
                            <p className="text-2xl font-bold">
                                {approvedLeaves}
                            </p>
                        </div>
                        <div className="rounded-full bg-green-500/10 p-2">
                            <Check className="h-5 w-5 text-green-500" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Pending
                            </p>
                            <p className="text-2xl font-bold">
                                {pendingLeaves}
                            </p>
                        </div>
                        <div className="rounded-full bg-yellow-500/10 p-2">
                            <Clock className="h-5 w-5 text-yellow-500" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Rejected
                            </p>
                            <p className="text-2xl font-bold">
                                {rejectedLeaves}
                            </p>
                        </div>
                        <div className="rounded-full bg-red-500/10 p-2">
                            <X className="h-5 w-5 text-red-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search leaves..."
                        className="w-full pl-8"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // Reset to first page on search
                        }}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <Filter className="h-4 w-4" />
                                Filters
                                {(filters.leaveTypes.length > 0 ||
                                    filters.status.length > 0 ||
                                    filters.dateRange) && (
                                    <Badge
                                        variant="secondary"
                                        className="ml-1 rounded-full px-1 text-xs"
                                    >
                                        {filters.leaveTypes.length +
                                            filters.status.length +
                                            (filters.dateRange ? 1 : 0)}
                                    </Badge>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">
                                        Filters
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Filter leaves by type, status, and date
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <Label htmlFor="date-range">
                                            Date Range
                                        </Label>
                                        <DatePickerWithRange
                                            date={filters.dateRange!}
                                            setDate={(range) =>
                                                setDateRangeFilter(range)
                                            }
                                        />
                                    </div>
                                    <Separator />
                                    <div className="grid gap-1">
                                        <Label>Leave Type</Label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {leaveTypes.map((type) => (
                                                <div
                                                    key={type}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <Checkbox
                                                        id={`leave-type-${type}`}
                                                        checked={filters.leaveTypes.includes(
                                                            type
                                                        )}
                                                        onCheckedChange={() =>
                                                            toggleLeaveTypeFilter(
                                                                type
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={`leave-type-${type}`}
                                                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {type}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="grid gap-1">
                                        <Label>Status</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {statusOptions.map((status) => (
                                                <div
                                                    key={status}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <Checkbox
                                                        id={`status-${status}`}
                                                        checked={filters.status.includes(
                                                            status
                                                        )}
                                                        onCheckedChange={() =>
                                                            toggleStatusFilter(
                                                                status
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={`status-${status}`}
                                                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {status}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={clearFilters}
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>

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
                            <TableHead className="w-[80px]">ID</TableHead>
                            <TableHead className="min-w-[180px]">
                                Employee
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Department
                            </TableHead>
                            <TableHead>Leave Type</TableHead>
                            <TableHead className="hidden sm:table-cell">
                                Duration
                            </TableHead>
                            <TableHead className="hidden lg:table-cell">
                                Date Range
                            </TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentLeaves.length > 0 ? (
                            currentLeaves.map((leave) => (
                                <TableRow key={leave.id}>
                                    <TableCell className="font-medium">
                                        {leave.id}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage
                                                    src={leave.avatar}
                                                    alt={leave.employeeName}
                                                />
                                                <AvatarFallback>
                                                    {leave.employeeName
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    {leave.employeeName}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {leave.employeeId}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {leave.department}
                                    </TableCell>
                                    <TableCell>{leave.leaveType}</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4 text-muted-foreground" />
                                            <span>
                                                {leave.duration}{" "}
                                                {leave.duration === 1
                                                    ? "day"
                                                    : "days"}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {formatDate(leave.startDate)} -{" "}
                                        {formatDate(leave.endDate)}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                leave.status === "Approved"
                                                    ? "default"
                                                    : leave.status === "Pending"
                                                    ? "outline"
                                                    : "secondary"
                                            }
                                            className={
                                                leave.status === "Approved"
                                                    ? "bg-green-500"
                                                    : leave.status ===
                                                      "Rejected"
                                                    ? "bg-red-500"
                                                    : ""
                                            }
                                        >
                                            {leave.status}
                                        </Badge>
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
                                                    <Eye className="h-4 w-4" />
                                                    View Details
                                                </DropdownMenuItem>
                                                {leave.status === "Pending" && (
                                                    <>
                                                        <DropdownMenuItem className="flex items-center gap-2 text-green-600 focus:text-green-600">
                                                            <Check className="h-4 w-4" />
                                                            Approve
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="flex items-center gap-2 text-red-600 focus:text-red-600">
                                                            <X className="h-4 w-4" />
                                                            Reject
                                                        </DropdownMenuItem>
                                                    </>
                                                )}
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
                                    colSpan={8}
                                    className="h-24 text-center"
                                >
                                    No leaves found.
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
                    {Math.min(indexOfLastItem, filteredLeaves.length)} of{" "}
                    {filteredLeaves.length} leaves
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
