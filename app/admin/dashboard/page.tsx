"use client";

import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Download,
    Edit,
    Eye,
    FileText,
    Filter,
    MoreHorizontal,
    Search,
    Trash2,
    Upload,
    File,
    FileBadge,
    FileImage,
    FileSpreadsheet,
    FileTextIcon,
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for documents
const documents = [
    {
        id: "DOC001",
        title: "Employment Contract",
        employeeId: "EMP001",
        employeeName: "Alex Johnson",
        department: "Mathematics",
        category: "Appointment",
        format: "PDF",
        size: "2.4 MB",
        status: "Active",
        uploadedBy: "HR Admin",
        uploadDate: "2023-01-15",
        expiryDate: "2026-01-15",
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
    {
        id: "DOC002",
        title: "Teaching Certification",
        employeeId: "EMP001",
        employeeName: "Alex Johnson",
        department: "Mathematics",
        category: "Diploma",
        format: "PDF",
        size: "1.8 MB",
        status: "Active",
        uploadedBy: "Alex Johnson",
        uploadDate: "2022-11-05",
        expiryDate: "2027-11-05",
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
    {
        id: "DOC003",
        title: "Academic Transcript",
        employeeId: "EMP002",
        employeeName: "Samantha Lee",
        department: "Marketing",
        category: "License/ Eligibility",
        format: "PDF",
        size: "3.1 MB",
        status: "Active",
        uploadedBy: "HR Admin",
        uploadDate: "2022-09-20",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=SL",
    },
    {
        id: "DOC004",
        title: "Health Insurance Form",
        employeeId: "EMP003",
        employeeName: "Michael Chen",
        department: "Science",
        category: "Personal Data Sheet",
        format: "PDF",
        size: "1.2 MB",
        status: "Active",
        uploadedBy: "HR Admin",
        uploadDate: "2023-02-10",
        expiryDate: "2024-02-10",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    {
        id: "DOC005",
        title: "Performance Review - 2023",
        employeeId: "EMP001",
        employeeName: "Alex Johnson",
        department: "Mathematics",
        category: "Service Record (for upload Excel File)",
        format: "DOCX",
        size: "852 KB",
        status: "Active",
        uploadedBy: "Dr. Robert Johnson",
        uploadDate: "2023-06-15",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
    {
        id: "DOC006",
        title: "ID Card Scan",
        employeeId: "EMP004",
        employeeName: "Emily Rodriguez",
        department: "Human Resources",
        category: "Transcript of Records (Bachelor's Degree, Masters, Doctorate)",
        format: "JPG",
        size: "521 KB",
        status: "Active",
        uploadedBy: "Emily Rodriguez",
        uploadDate: "2023-03-05",
        expiryDate: "2028-03-04",
        avatar: "/placeholder.svg?height=40&width=40&text=ER",
    },
    {
        id: "DOC007",
        title: "Tax Withholding Form",
        employeeId: "EMP005",
        employeeName: "David Kim",
        department: "Computer Science",
        category: "Seminars and Training Attended",
        format: "PDF",
        size: "640 KB",
        status: "Active",
        uploadedBy: "HR Admin",
        uploadDate: "2023-01-20",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=DK",
    },
    {
        id: "DOC008",
        title: "Professional Development Certificate",
        employeeId: "EMP006",
        employeeName: "Jessica Taylor",
        department: "English",
        category: "Appointment",
        format: "PDF",
        size: "1.5 MB",
        status: "Expiring Soon",
        uploadedBy: "Jessica Taylor",
        uploadDate: "2022-07-12",
        expiryDate: "2023-07-12",
        avatar: "/placeholder.svg?height=40&width=40&text=JT",
    },
    {
        id: "DOC009",
        title: "Background Check Results",
        employeeId: "EMP007",
        employeeName: "Ryan Patel",
        department: "Physical Education",
        category: "Diploma",
        format: "PDF",
        size: "1.3 MB",
        status: "Active",
        uploadedBy: "HR Admin",
        uploadDate: "2022-08-30",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=RP",
    },
    {
        id: "DOC010",
        title: "Art Exhibition Certificate",
        employeeId: "EMP008",
        employeeName: "Olivia Wilson",
        department: "Art & Design",
        category: "License/ Eligibility",
        format: "PDF",
        size: "950 KB",
        status: "Active",
        uploadedBy: "Olivia Wilson",
        uploadDate: "2023-04-20",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=OW",
    },
    {
        id: "DOC011",
        title: "Music Composition License",
        employeeId: "EMP009",
        employeeName: "Daniel Martinez",
        department: "Music",
        category: "Personal Data Sheet",
        format: "PDF",
        size: "780 KB",
        status: "Active",
        uploadedBy: "Daniel Martinez",
        uploadDate: "2023-03-15",
        expiryDate: "2026-03-15",
        avatar: "/placeholder.svg?height=40&width=40&text=DM",
    },
    {
        id: "DOC012",
        title: "Emergency Contact Form",
        employeeId: "EMP010",
        employeeName: "Sophia Brown",
        department: "History",
        category: "Service Record (for upload Excel File)",
        format: "PDF",
        size: "520 KB",
        status: "Active",
        uploadedBy: "HR Admin",
        uploadDate: "2023-01-10",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=SB",
    },
    {
        id: "DOC013",
        title: "Sabbatical Request",
        employeeId: "EMP011",
        employeeName: "James Wilson",
        department: "Mathematics",
        category: "Transcript of Records (Bachelor's Degree, Masters, Doctorate)",
        format: "DOCX",
        size: "620 KB",
        status: "Under Review",
        uploadedBy: "James Wilson",
        uploadDate: "2023-05-18",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=JW",
    },
    {
        id: "DOC014",
        title: "Language Proficiency Certificate",
        employeeId: "EMP012",
        employeeName: "Emma Davis",
        department: "Foreign Languages",
        category: "Seminars and Training Attended",
        format: "PDF",
        size: "1.1 MB",
        status: "Active",
        uploadedBy: "Emma Davis",
        uploadDate: "2022-12-05",
        expiryDate: "2027-12-05",
        avatar: "/placeholder.svg?height=40&width=40&text=ED",
    },
    {
        id: "DOC015",
        title: "Retirement Plan Enrollment",
        employeeId: "EMP004",
        employeeName: "Emily Rodriguez",
        department: "Human Resources",
        category: "Appointment",
        format: "PDF",
        size: "890 KB",
        status: "Active",
        uploadedBy: "HR Admin",
        uploadDate: "2022-10-15",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=ER",
    },
    {
        id: "DOC016",
        title: "Sales Report - Q1 2024",
        employeeId: "EMP001",
        employeeName: "Alex Johnson",
        department: "Sales",
        category: "Diploma",
        format: "XLSX",
        size: "450 KB",
        status: "Active",
        uploadedBy: "Sales Manager",
        uploadDate: "2024-03-15",
        expiryDate: null,
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
];

// Document categories for filtering
const documentCategories = [
    "Appointment",
    "Diploma",
    "License/ Eligibility",
    "Personal Data Sheet",
    "Service Record (for upload Excel File)",
    "Transcript of Records (Bachelor's Degree, Masters, Doctorate)",
    "Seminars and Training Attended",
];

// Document formats for filtering
const documentFormats = ["PDF", "DOCX", "JPG", "PNG", "XLSX"];

// Status options for filtering
const statusOptions = ["Active", "Expiring Soon", "Expired", "Under Review"];

export default function DocumentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [filters, setFilters] = useState({
        categories: [] as string[],
        formats: [] as string[],
        status: [] as string[],
    });

    // Filter documents based on search term and filters
    const filteredDocuments = documents.filter((document) => {
        // Search filter
        const matchesSearch =
            document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            document.employeeName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            document.category
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            document.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            document.id.toLowerCase().includes(searchTerm.toLowerCase());

        // Category filter
        const matchesCategory =
            filters.categories.length === 0 ||
            filters.categories.includes(document.category);

        // Format filter
        const matchesFormat =
            filters.formats.length === 0 ||
            filters.formats.includes(document.format);

        // Status filter
        const matchesStatus =
            filters.status.length === 0 ||
            filters.status.includes(document.status);

        return (
            matchesSearch && matchesCategory && matchesFormat && matchesStatus
        );
    });

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDocuments = filteredDocuments.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Format date to a more readable format
    const formatDate = (dateString: string | null) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(date);
    };

    // Toggle category filter
    const toggleCategoryFilter = (category: string) => {
        setFilters((prev) => {
            const newCategories = prev.categories.includes(category)
                ? prev.categories.filter((c) => c !== category)
                : [...prev.categories, category];

            return {
                ...prev,
                categories: newCategories,
            };
        });
        setCurrentPage(1); // Reset to first page when filtering
    };

    // Toggle format filter
    const toggleFormatFilter = (format: string) => {
        setFilters((prev) => {
            const newFormats = prev.formats.includes(format)
                ? prev.formats.filter((f) => f !== format)
                : [...prev.formats, format];

            return {
                ...prev,
                formats: newFormats,
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

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            categories: [],
            formats: [],
            status: [],
        });
        setCurrentPage(1); // Reset to first page when clearing filters
    };

    // Calculate document statistics
    const totalDocuments = documents.length;
    const activeDocuments = documents.filter(
        (doc) => doc.status === "Active"
    ).length;
    const expiringDocuments = documents.filter(
        (doc) => doc.status === "Expiring Soon"
    ).length;
    const underReviewDocuments = documents.filter(
        (doc) => doc.status === "Under Review"
    ).length;

    // Get appropriate icon based on file format
    const getFileIcon = (format: string) => {
        switch (format) {
            case "PDF":
                return <FileText className="h-4 w-4 text-red-500" />;
            case "DOCX":
                return <FileTextIcon className="h-4 w-4 text-blue-500" />;
            case "JPG":
            case "PNG":
                return <FileImage className="h-4 w-4 text-green-500" />;
            case "XLSX":
                return <FileSpreadsheet className="h-4 w-4 text-emerald-500" />;
            default:
                return <File className="h-4 w-4 text-muted-foreground" />;
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight">
                    Document Management
                </h1>
                <Button className="flex items-center gap-1">
                    <Upload className="h-4 w-4" />
                    Upload Document
                </Button>
            </div>

            {/* Statistics Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex flex-row items-center justify-between p-4">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Total Documents
                            </p>
                            <p className="text-2xl font-bold">
                                {totalDocuments}
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
                                Active
                            </p>
                            <p className="text-2xl font-bold">
                                {activeDocuments}
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
                                Expiring Soon
                            </p>
                            <p className="text-2xl font-bold">
                                {expiringDocuments}
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
                                Under Review
                            </p>
                            <p className="text-2xl font-bold">
                                {underReviewDocuments}
                            </p>
                        </div>
                        <div className="rounded-full bg-blue-500/10 p-2">
                            <FileText className="h-5 w-5 text-blue-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search documents..."
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
                                {(filters.categories.length > 0 ||
                                    filters.formats.length > 0 ||
                                    filters.status.length > 0) && (
                                    <Badge
                                        variant="secondary"
                                        className="ml-1 rounded-full px-1 text-xs"
                                    >
                                        {filters.categories.length +
                                            filters.formats.length +
                                            filters.status.length}
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
                                        Filter documents by type, format, and
                                        status
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <Label>Document Category</Label>
                                        <div className="grid grid-cols-2 gap-2 h-[150px] overflow-y-auto pr-2">
                                            {documentCategories.map(
                                                (category) => (
                                                    <div
                                                        key={category}
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <Checkbox
                                                            id={`category-${category}`}
                                                            checked={filters.categories.includes(
                                                                category
                                                            )}
                                                            onCheckedChange={() =>
                                                                toggleCategoryFilter(
                                                                    category
                                                                )
                                                            }
                                                        />
                                                        <label
                                                            htmlFor={`category-${category}`}
                                                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {category}
                                                        </label>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="grid gap-1">
                                        <Label>File Format</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {documentFormats.map((format) => (
                                                <div
                                                    key={format}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <Checkbox
                                                        id={`format-${format}`}
                                                        checked={filters.formats.includes(
                                                            format
                                                        )}
                                                        onCheckedChange={() =>
                                                            toggleFormatFilter(
                                                                format
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={`format-${format}`}
                                                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {format}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="grid gap-1">
                                        <Label>Status</Label>
                                        <div className="grid grid-cols-2 gap-2">
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
                            <TableHead className="min-w-[220px]">
                                Document
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Employee
                            </TableHead>
                            <TableHead className="hidden lg:table-cell">
                                Department
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                                Category
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Upload Date
                            </TableHead>
                            <TableHead className="hidden lg:table-cell">
                                Expiry Date
                            </TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[80px] text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentDocuments.length > 0 ? (
                            currentDocuments.map((document) => (
                                <TableRow key={document.id}>
                                    <TableCell className="font-medium">
                                        {document.id}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted">
                                                {getFileIcon(document.format)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium">
                                                    {document.title}
                                                </span>
                                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    {getFileIcon(
                                                        document.format
                                                    )}
                                                    {document.format} •{" "}
                                                    {document.size}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-7 w-7">
                                                <AvatarImage
                                                    src={document.avatar}
                                                    alt={document.employeeName}
                                                />
                                                <AvatarFallback>
                                                    {document.employeeName
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span>{document.employeeName}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {document.department}
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        {document.category}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {formatDate(document.uploadDate)}
                                    </TableCell>
                                    <TableCell className="hidden lg:table-cell">
                                        {formatDate(document.expiryDate)}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                document.status === "Active"
                                                    ? "default"
                                                    : document.status ===
                                                      "Expiring Soon"
                                                    ? "outline"
                                                    : document.status ===
                                                      "Under Review"
                                                    ? "secondary"
                                                    : "destructive"
                                            }
                                            className={
                                                document.status === "Active"
                                                    ? "bg-green-500"
                                                    : document.status ===
                                                      "Expiring Soon"
                                                    ? "border-yellow-500 text-yellow-500"
                                                    : ""
                                            }
                                        >
                                            {document.status}
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
                                                    View Document
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <Download className="h-4 w-4" />
                                                    Download
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <Edit className="h-4 w-4" />
                                                    Edit Details
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
                                    colSpan={9}
                                    className="h-24 text-center"
                                >
                                    No documents found.
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
                    {Math.min(indexOfLastItem, filteredDocuments.length)} of{" "}
                    {filteredDocuments.length} documents
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
