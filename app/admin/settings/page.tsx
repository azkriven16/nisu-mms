import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
    return (
        <div className="min-h-screen w-full bg-background p-4 md:p-6">
            <div className="flex flex-col gap-4 mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                    Manage your account settings and configure school
                    preferences.
                </p>
            </div>
            <Tabs defaultValue="profile" className="mt-6">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="school">School</TabsTrigger>
                    <TabsTrigger value="notifications">
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger value="system">System</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-6 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>
                                Update your personal information and profile
                                settings.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">
                                        First name
                                    </Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="title">Job Title</Label>
                                <Input id="title" placeholder="Principal" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    placeholder="Tell us about yourself"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="school" className="mt-6 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>School Information</CardTitle>
                            <CardDescription>
                                Update your school details and configuration.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="school-name">School Name</Label>
                                <Input
                                    id="school-name"
                                    placeholder="Westview High School"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="school-type">
                                        School Type
                                    </Label>
                                    <Select defaultValue="high-school">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select school type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="elementary">
                                                Elementary School
                                            </SelectItem>
                                            <SelectItem value="middle">
                                                Middle School
                                            </SelectItem>
                                            <SelectItem value="high-school">
                                                High School
                                            </SelectItem>
                                            <SelectItem value="college">
                                                College
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="district">
                                        School District
                                    </Label>
                                    <Input
                                        id="district"
                                        placeholder="Westview District"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Textarea
                                    id="address"
                                    placeholder="123 Education St, City, State, ZIP"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="notifications" className="mt-6 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>
                                Configure how you receive notifications and
                                alerts.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            Email Notifications
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Receive email notifications for
                                            important updates.
                                        </p>
                                    </div>
                                    <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            New Employee Alerts
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Get notified when new employees are
                                            added.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            Attendance Reports
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Receive daily attendance summary
                                            reports.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            System Updates
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Get notified about system updates
                                            and maintenance.
                                        </p>
                                    </div>
                                    <Switch />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Reset Defaults</Button>
                            <Button>Save Preferences</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="system" className="mt-6 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>System Settings</CardTitle>
                            <CardDescription>
                                Configure system preferences and display
                                options.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Theme Preference</Label>
                                    <RadioGroup
                                        defaultValue="system"
                                        className="flex gap-4"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="light"
                                                id="light"
                                            />
                                            <Label htmlFor="light">Light</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="dark"
                                                id="dark"
                                            />
                                            <Label htmlFor="dark">Dark</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="system"
                                                id="system"
                                            />
                                            <Label htmlFor="system">
                                                System
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="space-y-2">
                                    <Label>Language</Label>
                                    <Select defaultValue="en">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">
                                                English
                                            </SelectItem>
                                            <SelectItem value="es">
                                                Spanish
                                            </SelectItem>
                                            <SelectItem value="fr">
                                                French
                                            </SelectItem>
                                            <SelectItem value="de">
                                                German
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            Compact View
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Use a more compact layout to show
                                            more information.
                                        </p>
                                    </div>
                                    <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            Auto-save Data
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Automatically save changes as you
                                            make them.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Reset to Defaults</Button>
                            <Button>Save Settings</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="security" className="mt-6 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                            <CardDescription>
                                Manage your account security and authentication
                                options.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="current-password">
                                        Current Password
                                    </Label>
                                    <Input
                                        id="current-password"
                                        type="password"
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="new-password">
                                            New Password
                                        </Label>
                                        <Input
                                            id="new-password"
                                            type="password"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">
                                            Confirm Password
                                        </Label>
                                        <Input
                                            id="confirm-password"
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            Two-Factor Authentication
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Add an extra layer of security to
                                            your account.
                                        </p>
                                    </div>
                                    <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">
                                            Session Timeout
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Automatically log out after period
                                            of inactivity.
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button>Update Security</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
