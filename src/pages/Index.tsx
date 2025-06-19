
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Search, Filter, Grid, List, TrendingUp, Target, Clock, Award, Zap, BookOpen, Star, Trophy } from 'lucide-react';

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
          <div className="flex items-center justify-between h-20">
            {/* Left side - Brand and Welcome */}
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                halt
              </h1>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Welcome Back, parag</p>
                  <p className="text-sm text-blue-600">Ready to power up? 👋</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Data Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-blue-100">This Month</p>
                <p className="text-2xl font-bold">94</p>
                <p className="text-xs text-blue-100">+12 from last month</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-green-100">Completed</p>
                <p className="text-2xl font-bold">28</p>
                <p className="text-xs text-green-100">89% success rate</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-purple-100">Streak</p>
                <p className="text-2xl font-bold">7</p>
                <p className="text-xs text-purple-100">days in a row</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border-0 shadow-xl overflow-hidden relative">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4">
                  <Zap className="h-24 w-24 rotate-12" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <BookOpen className="h-16 w-16 -rotate-12" />
                </div>
              </div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-bold">Power Up Your Learning!</CardTitle>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Stay ahead of risks and make confident decisions. Dive into your expert content and accelerate your growth journey.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Monthly Progress</span>
                    <span className="text-sm font-bold bg-white/20 px-2 py-1 rounded-full">5 Sprints Goal</span>
                  </div>
                  <div className="space-y-2">
                    <Progress value={75} className="h-3 bg-blue-500" />
                    <div className="flex justify-between text-xs text-blue-100">
                      <span>3 of 5 completed</span>
                      <span>75% there!</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
