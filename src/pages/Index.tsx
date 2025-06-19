
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Search, Filter, Grid, List, TrendingUp, Target, Clock, Award } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  // Sample data for charts
  const performanceData = [
    { month: '2024-12', myPoints: 45, teamAverage: 52 },
    { month: '2025-01', myPoints: 38, teamAverage: 48 },
    { month: '2025-02', myPoints: 65, teamAverage: 55 },
    { month: '2025-03', myPoints: 72, teamAverage: 58 },
    { month: '2025-04', myPoints: 58, teamAverage: 62 },
    { month: '2025-05', myPoints: 89, teamAverage: 71 },
    { month: '2025-06', myPoints: 94, teamAverage: 68 },
  ];

  const sprintData = [
    {
      id: 1,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "(Filter: Vestas - Overview)",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      status: "completed"
    },
    {
      id: 2,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "(Filter: Vestas - JPN_MS)",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "(Filter: Vestas - Overview)",
      query: "linux4",
      feedback: "Save time",
      status: "completed"
    },
    {
      id: 4,
      title: "How to plan and conduct a live evaluation of your ERP",
      subtitle: "",
      query: "Planning for difficult weather conditions",
      feedback: "Improve quality",
      status: "pending"
    },
    {
      id: 5,
      title: "Offshore weather and environmental conditions",
      subtitle: "",
      query: "Planning for difficult weather conditions",
      feedback: "Improve quality",
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSprints = sprintData.filter(sprint =>
    sprint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sprint.query.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">halt</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">P</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Welcome Back, parag</p>
                  <p className="text-xs text-gray-500">👋</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Power Up Your Learning!</CardTitle>
                <p className="text-blue-100 text-sm">
                  Stay ahead of risks and make confident decisions. Dive into your expert content today.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-bold">5 Sprints per Month</span>
                  </div>
                  <Progress value={75} className="h-2 bg-blue-500" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Ready to start powering up?</p>
                  <p className="text-xs text-blue-100">Your first sprint awaits!</p>
                </div>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Start Learning
                </Button>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">This Month</p>
                    <p className="text-lg font-bold text-gray-900">94</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500">Completed</p>
                    <p className="text-lg font-bold text-gray-900">28</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs Navigation */}
            <Tabs defaultValue="progress" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white border shadow-sm">
                <TabsTrigger value="progress" className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Progress</span>
                </TabsTrigger>
                <TabsTrigger value="sprints" className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>My Sprints</span>
                </TabsTrigger>
                <TabsTrigger value="content" className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Top Content</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="progress" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      My Performance vs. My Team Average
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="month" 
                          stroke="#666"
                          fontSize={12}
                        />
                        <YAxis 
                          stroke="#666"
                          fontSize={12}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="myPoints" 
                          stroke="#3b82f6" 
                          strokeWidth={3}
                          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                          name="My Sprints"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="teamAverage" 
                          stroke="#60a5fa" 
                          strokeWidth={3}
                          strokeDasharray="5 5"
                          dot={{ fill: '#60a5fa', strokeWidth: 2, r: 6 }}
                          name="Team Sprints"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sprints" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <CardTitle className="text-lg font-semibold text-gray-900">My Sprints</CardTitle>
                      <div className="flex items-center space-x-2">
                        <div className="relative flex-1 sm:w-64">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Search Sprints"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          <Filter className="h-4 w-4 mr-2" />
                          Status
                        </Button>
                        <div className="flex border rounded-md">
                          <Button
                            variant={viewMode === 'list' ? 'default' : 'ghost'}
                            size="sm"
                            onClick={() => setViewMode('list')}
                            className="rounded-r-none"
                          >
                            <List className="h-4 w-4" />
                          </Button>
                          <Button
                            variant={viewMode === 'grid' ? 'default' : 'ghost'}
                            size="sm"
                            onClick={() => setViewMode('grid')}
                            className="rounded-l-none"
                          >
                            <Grid className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                        <div>Title</div>
                        <div>Your Query</div>
                        <div>Your Feedback</div>
                        <div>Status</div>
                      </div>
                      {filteredSprints.map((sprint) => (
                        <div 
                          key={sprint.id} 
                          className="grid grid-cols-4 gap-4 items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div>
                            <p className="font-medium text-gray-900">{sprint.title}</p>
                            {sprint.subtitle && (
                              <p className="text-sm text-gray-500">{sprint.subtitle}</p>
                            )}
                          </div>
                          <div className="text-sm text-gray-700">{sprint.query}</div>
                          <div className="text-sm text-gray-700">{sprint.feedback}</div>
                          <div>
                            <Badge className={`${getStatusColor(sprint.status)} border-0`}>
                              {sprint.status.replace('-', ' ')}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">Top Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sprintData.slice(0, 4).map((item) => (
                        <Card key={item.id} className="p-4 hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                          <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.query}</p>
                          <Badge className={`${getStatusColor(item.status)} border-0 text-xs`}>
                            {item.feedback}
                          </Badge>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
