import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import { Calendar, Clock, Users, AlertCircle, FolderKanban, Target } from "lucide-react";

const activeProjects = [
  {
    name: "Mobile App v2.0",
    status: "In Progress",
    progress: 75,
    dueDate: "2024-07-15",
    team: ["SJ", "MC", "ED"],
    priority: "High",
    tasks: { completed: 18, total: 24 }
  },
  {
    name: "Marketing Campaign Q3",
    status: "Planning",
    progress: 25,
    dueDate: "2024-08-01",
    team: ["AR", "JW"],
    priority: "Medium",
    tasks: { completed: 5, total: 20 }
  },
  {
    name: "Infrastructure Upgrade",
    status: "In Progress",
    progress: 90,
    dueDate: "2024-06-30",
    team: ["JW", "SJ"],
    priority: "High",
    tasks: { completed: 9, total: 10 }
  },
  {
    name: "User Research Study",
    status: "Completed",
    progress: 100,
    dueDate: "2024-06-15",
    team: ["ED", "MC"],
    priority: "Low",
    tasks: { completed: 12, total: 12 }
  },
  {
    name: "API Documentation",
    status: "On Hold",
    progress: 40,
    dueDate: "2024-07-30",
    team: ["SJ"],
    priority: "Low",
    tasks: { completed: 6, total: 15 }
  },
];

const projectTimeline = [
  { month: "Jan", completed: 8, planned: 10 },
  { month: "Feb", completed: 12, planned: 12 },
  { month: "Mar", completed: 15, planned: 16 },
  { month: "Apr", completed: 18, planned: 20 },
  { month: "May", completed: 22, planned: 24 },
  { month: "Jun", completed: 20, planned: 22 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed": return "bg-green-100 text-green-800";
    case "In Progress": return "bg-blue-100 text-blue-800";
    case "Planning": return "bg-yellow-100 text-yellow-800";
    case "On Hold": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "bg-red-100 text-red-800";
    case "Medium": return "bg-yellow-100 text-yellow-800";
    case "Low": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      {/* Project Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Projects
            </CardTitle>
            <FolderKanban className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">5</div>
            <p className="text-xs text-muted-foreground">3 in progress</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Completion Rate
            </CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">91%</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Overdue Tasks
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">3</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Project Duration
            </CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">6.2w</div>
            <p className="text-xs text-muted-foreground">-0.8w vs target</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects List */}
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>Current project status and progress tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeProjects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-lg">{project.name}</h4>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className={getPriorityColor(project.priority)}>
                      {project.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.dueDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.team.length}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.tasks.completed} / {project.tasks.total} tasks
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.map((member, idx) => (
                      <Avatar key={idx} className="h-6 w-6 border-2 border-white">
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                          {member}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Timeline Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Project Delivery Timeline</CardTitle>
          <CardDescription>Planned vs completed projects over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="planned" 
                stroke="#94a3b8" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#94a3b8", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
