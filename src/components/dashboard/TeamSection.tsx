
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Users, Clock, Target, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    avatar: "/placeholder.svg",
    initials: "SJ",
    status: "online",
    productivity: 92,
    tasksCompleted: 28,
    department: "Engineering"
  },
  {
    name: "Mike Chen",
    role: "Product Manager",
    avatar: "/placeholder.svg",
    initials: "MC",
    status: "online",
    productivity: 88,
    tasksCompleted: 22,
    department: "Product"
  },
  {
    name: "Emma Davis",
    role: "UX Designer",
    avatar: "/placeholder.svg",
    initials: "ED",
    status: "away",
    productivity: 85,
    tasksCompleted: 19,
    department: "Design"
  },
  {
    name: "Alex Rodriguez",
    role: "Marketing Lead",
    avatar: "/placeholder.svg",
    initials: "AR",
    status: "online",
    productivity: 90,
    tasksCompleted: 25,
    department: "Marketing"
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    avatar: "/placeholder.svg",
    initials: "JW",
    status: "offline",
    productivity: 78,
    tasksCompleted: 15,
    department: "Engineering"
  },
];

const departmentData = [
  { department: "Engineering", members: 8, productivity: 85 },
  { department: "Product", members: 4, productivity: 88 },
  { department: "Design", members: 3, productivity: 82 },
  { department: "Marketing", members: 5, productivity: 90 },
  { department: "Sales", members: 6, productivity: 87 },
];

const workloadData = [
  { name: "Light", value: 15, color: "#22c55e" },
  { name: "Optimal", value: 65, color: "#3b82f6" },
  { name: "Heavy", value: 20, color: "#f59e0b" },
];

export function TeamSection() {
  return (
    <div className="space-y-6">
      {/* Team Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Team Members
            </CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">26</div>
            <p className="text-xs text-muted-foreground">+3 this month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Productivity
            </CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">86%</div>
            <p className="text-xs text-muted-foreground">+2% vs last week</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tasks Completed
            </CardTitle>
            <Award className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">342</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Hours/Week
            </CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">42.5</div>
            <p className="text-xs text-muted-foreground">Within target range</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Members List */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Current team status and productivity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      member.status === 'online' ? 'bg-green-500' : 
                      member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-1">
                    {member.productivity}%
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    {member.tasksCompleted} tasks
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Productivity by department</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="department" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="productivity" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Workload Distribution and Team Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Workload Distribution</CardTitle>
            <CardDescription>Current team capacity allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={workloadData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {workloadData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {workloadData.map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-4 h-4 rounded-full mx-auto mb-1" 
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.value}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Goals</CardTitle>
            <CardDescription>Q2 2024 team objectives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Hire 5 new developers</span>
                <span className="text-sm text-muted-foreground">3 / 5</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Complete team training</span>
                <span className="text-sm text-muted-foreground">22 / 26</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Maintain 85%+ productivity</span>
                <span className="text-sm text-muted-foreground">86%</span>
              </div>
              <Progress value={86} className="h-2" />
            </div>
            <Button className="w-full mt-4">
              View Detailed Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
