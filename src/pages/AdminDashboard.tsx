
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, Lock, Plus, Trash2, Edit, Eye,
  Upload, Save, AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { eventsData } from "@/lib/data";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [events, setEvents] = useState(eventsData);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  // This is a simple client-side auth for demonstration
  // In a real app, you would use a proper authentication system
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in a real app this would be a secure auth system
    if (password === "admin123") {
      setIsAuthenticated(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid password. Please try again.");
    }
  };
  
  // This would actually save to a database in a real application
  const handleSaveChanges = () => {
    setSuccessMessage("Changes saved successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Lock className="text-bncet-blue" />
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-12 w-12 text-bncet-blue" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">BNCET Events Hub</h2>
                <p className="text-sm text-gray-500">Enter your password to access the admin dashboard</p>
              </div>
              
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && (
                  <p className="text-destructive text-sm">{errorMessage}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full bg-bncet-blue hover:bg-bncet-darkBlue">
                Login
              </Button>
              
              <div className="text-center mt-4">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate("/")} 
                  className="text-sm text-gray-500"
                >
                  Return to Website
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button 
          variant="outline" 
          onClick={() => setIsAuthenticated(false)}
          className="text-gray-600"
        >
          Logout
        </Button>
      </div>
      
      {successMessage && (
        <div className="mb-6 p-3 bg-green-100 text-green-800 rounded-md flex items-center">
          <div className="mr-2 bg-green-200 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {successMessage}
        </div>
      )}
      
      <Tabs defaultValue="events">
        <TabsList className="mb-6">
          <TabsTrigger value="events">Manage Events</TabsTrigger>
          <TabsTrigger value="gallery">Manage Gallery</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Event List</CardTitle>
                <Button className="bg-bncet-blue hover:bg-bncet-darkBlue">
                  <Plus size={16} className="mr-2" /> Add New Event
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="h-10 w-10 object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {event.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            event.status === "upcoming" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {event.status === "upcoming" ? "Upcoming" : "Past"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Eye size={16} className="text-gray-500" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Edit size={16} className="text-blue-500" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Trash2 size={16} className="text-red-500" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Event Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Title
                    </label>
                    <Input placeholder="Enter event title" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date
                    </label>
                    <Input type="date" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Time
                    </label>
                    <Input type="time" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <Input placeholder="Enter event location" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Description
                  </label>
                  <Textarea 
                    placeholder="Enter a short description" 
                    className="resize-none"
                    rows={2}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Detailed Description
                  </label>
                  <Textarea 
                    placeholder="Enter the full event description" 
                    className="resize-none"
                    rows={5}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Banner Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-bncet-blue hover:text-bncet-darkBlue"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registration Form Link (Google Form)
                  </label>
                  <Input placeholder="https://forms.google.com/..." />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="button" 
                    className="bg-bncet-blue hover:bg-bncet-darkBlue"
                    onClick={handleSaveChanges}
                  >
                    <Save size={16} className="mr-2" />
                    Save Event
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="gallery">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Gallery Management</CardTitle>
                <Button className="bg-bncet-blue hover:bg-bncet-darkBlue">
                  <Plus size={16} className="mr-2" /> Add Media
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-12 border-2 border-dashed border-gray-300 rounded-lg text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Upload media content</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Drag and drop files, or click to browse
                </p>
                <div className="mt-4">
                  <Button asChild>
                    <label>
                      <input type="file" multiple className="sr-only" />
                      Browse Files
                    </label>
                  </Button>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Uploads</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {/* Example upload items */}
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="group relative">
                      <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
                        <img
                          src={`https://source.unsplash.com/random/300x300?sig=${item}`}
                          alt="Gallery item"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="flex space-x-2">
                            <button className="p-1 rounded-full bg-white text-gray-700 hover:text-bncet-blue">
                              <Edit size={16} />
                            </button>
                            <button className="p-1 rounded-full bg-white text-gray-700 hover:text-red-500">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Admin Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Change Admin Password</h3>
                  <div className="grid grid-cols-1 gap-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <Input type="password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <Input type="password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <Input type="password" />
                    </div>
                    <Button className="bg-bncet-blue hover:bg-bncet-darkBlue">
                      Update Password
                    </Button>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Danger Zone</h3>
                  <div className="rounded-md bg-red-50 p-4 mt-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Be careful with these actions
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>
                            These actions cannot be undone. Please be certain before proceeding.
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to clear all events? This cannot be undone.")) {
                                // This would delete from a database in a real app
                                console.log("Cleared events");
                              }
                            }}
                          >
                            Clear All Events
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
