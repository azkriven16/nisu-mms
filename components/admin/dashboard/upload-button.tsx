import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function UploadButton() {
    return (
        <Button className="flex items-center gap-1">
            <Upload className="h-4 w-4" />
            Upload Document
        </Button>
    );
}
