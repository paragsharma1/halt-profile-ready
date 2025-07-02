
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Search, Filter, Grid, List, TrendingUp, Target, Clock, Award, Zap, BookOpen, Star, Trophy, Info, Copy, MessageSquare, Crown, Users } from 'lucide-react';

const IndexVariant = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sprintFilter, setSprintFilter] = useState('current-month');
  const [contentView, setContentView] = useState<'my' | 'team'>('my');
  const [currentPerformerIndex, setCurrentPerformerIndex] = useState(0);

  // Sample data - same as original but with different styling approach
  const performanceData = [
    { month: '2024-12', myPoints: 8, teamAverage: 12 },
    { month: '2025-01', myPoints: 6, teamAverage: 10 },
    { month: '2025-02', myPoints: 14, teamAverage: 11 },
    { month: '2025-03', myPoints: 16, teamAverage: 13 },
    { month: '2025-04', myPoints: 11, teamAverage: 14 },
    { month: '2025-05', myPoints: 5, teamAverage: 15 },
    { month: '2025-06', myPoints: 8, teamAverage: 4 },
  ];

  const sprintData = [
    {
      id: 1,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
    {
      id: 2,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      hasSubmittedFeedback: false,
      month: '2025-06'
    },
    {
      id: 3,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "",
      query: "linux4",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
    {
      id: 4,
      title: "How to plan and conduct a live evaluation of your ERP",
      subtitle: "",
      query: "Planning for difficult weather conditions",
      feedback: "Improve quality",
      hasSubmittedFeedback: false,
      month: '2025-06'
    },
    {
      id: 5,
      title: "Offshore weather and environmental conditions",
      subtitle: "",
      query: "Planning for difficult weather conditions",
      feedback: "Improve quality",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
    {
      id: 6,
      title: "Safety Equipment Maintenance Guide",
      subtitle: "",
      query: "Safety protocols",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
    {
      id: 7,
      title: "Emergency Response Training",
      subtitle: "",
      query: "Emergency procedures",
      feedback: "Improve quality",
      hasSubmittedFeedback: false,
      month: '2025-06'
    },
    {
      id: 8,
      title: "Risk Assessment Documentation",
      subtitle: "",
      query: "Risk management",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
  ];

  const topContent = [
    { id: 1, title: "Wind Turbine Maintenance Best Practices", feedback: "Save time", popularity: 95 },
    { id: 2, title: "Offshore Safety Protocols", feedback: "Improve quality", popularity: 88 },
    { id: 3, title: "Equipment Troubleshooting Guide", feedback: "Save time", popularity: 82 },
    { id: 4, title: "Emergency Response Procedures", feedback: "Improve quality", popularity: 79 }
  ];

  const topPerformers = [
    { name: "Sarah Chen", location: "Aberdeen Site" },
    { name: "Mike Johnson", location: "North Sea Platform" },
    { name: "Alex Rodriguez", location: "Offshore Platform B" }
  ];

  useEffect(() => {
    if (topPerformers.length > 1) {
      const interval = setInterval(() => {
        setCurrentPerformerIndex((prev) => (prev + 1) % topPerformers.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [topPerformers.length]);

  const getStatusBadge = (hasSubmittedFeedback: boolean) => {
    if (hasSubmittedFeedback) {
      return <Badge className="bg-green-100 text-green-800 border-0">Complete</Badge>;
    } else {
      return <Badge className="bg-orange-100 text-orange-800 border-0">Please attend huddle</Badge>;
    }
  };

  const filteredSprints = sprintData.filter(sprint => {
    const matchesSearch = sprint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sprint.query.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (sprintFilter === 'current-month') {
      return matchesSearch && sprint.month === '2025-06';
    } else if (sprintFilter === 'last-month') {
      return matchesSearch && sprint.month === '2025-05';
    }
    return matchesSearch;
  });

  const currentMonthSprints = sprintData.filter(sprint => sprint.month === '2025-06').length;
  const completedCurrentMonth = sprintData.filter(sprint => sprint.month === '2025-06' && sprint.hasSubmittedFeedback).length;
  const currentMonthCompletionRate = currentMonthSprints > 0 ? Math.round((completedCurrentMonth / currentMonthSprints) * 100) : 0;

  const sprintGoal = 5;
  const progressPercentage = (currentMonthSprints / sprintGoal) * 100;
  const exceedsGoal = currentMonthSprints > sprintGoal;
  const exceedancePercentage = exceedsGoal ? Math.round(((currentMonthSprints - sprintGoal) / sprintGoal) * 100) : 0;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const initiateTeamsSearch = (title: string) => {
    copyToClipboard(title);
    console.log(`Initiating Teams search with: ${title}`);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        {/* Header - Alternative styling */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Left side - Brand only */}
              <div className="flex items-center">
                <div className="text-2xl font-bold text-white">h'alt®</div>
              </div>
              
              {/* Right side - Welcome and Profile */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-purple-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-purple-600 font-bold text-lg">P</span>
                  </div>
                  <svg className="absolute -inset-2 w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="white"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      strokeDashoffset={`${2 * Math.PI * 28 * (1 - Math.min(progressPercentage, 100) / 100)}`}
                      className="transition-all duration-500 drop-shadow-sm"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Welcome Back, parag</p>
                  <p className="text-sm text-purple-200">Ready to power up? 👋</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Data Metrics Cards - Alternative Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-4 bg-white border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-50 rounded-lg border border-purple-100">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-600">This Month</p>
                    <p className="text-2xl font-bold text-purple-800">{currentMonthSprints}</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-xs text-purple-500 cursor-help border-b border-dotted border-purple-400">
                          + 3 from last month
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>You started 3 more sprints this month compared to last month</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-50 rounded-lg border border-green-100">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-green-600">Completed</p>
                    <p className="text-2xl font-bold text-green-800">{completedCurrentMonth}</p>
                    <p className="text-xs text-green-500">{currentMonthCompletionRate}% this month</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white border-2 border-orange-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-50 rounded-lg border border-orange-100">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-600">Streak</p>
                    <p className="text-2xl font-bold text-orange-800">4</p>
                    <p className="text-xs text-orange-500">days in a row</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-white border-2 border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg border border-indigo-100">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="min-h-[60px] flex flex-col justify-center">
                    <p className="text-xs text-indigo-600">Team Leader</p>
                    <div className="transition-all duration-500 ease-in-out">
                      <p className="text-lg font-bold text-indigo-800">{topPerformers[currentPerformerIndex].name}</p>
                      <p className="text-xs text-indigo-500">from {topPerformers[currentPerformerIndex].location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Progress Card with variant styling */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 text-white border-0 shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4">
                    <Target className="h-24 w-24 rotate-12" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Award className="h-16 w-16 -rotate-12" />
                  </div>
                </div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl font-bold">Achieve Your Target!</CardTitle>
                  </div>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Excellence in decision-making starts with continuous learning. Reach your sprint target today.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="bg-purple-500 rounded-lg p-3 border border-purple-400">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">Target</span>
                      <span className="text-white font-bold text-sm">5 Sprints</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span>Your Progress</span>
                        <span className="font-bold">{currentMonthSprints} / {sprintGoal} sprints</span>
                      </div>
                      <Progress 
                        value={Math.min(progressPercentage, 100)} 
                        className="h-3 bg-purple-500" 
                      />
                      {exceedsGoal && (
                        <div className="text-xs text-purple-100 text-center">
                          <span className="font-bold">+{exceedancePercentage}%</span> above target!
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      {currentMonthSprints === 0 ? (
                        <>
                          <p className="text-sm text-purple-100">
                            Ready to begin your journey?
                          </p>
                          <p className="text-sm text-purple-100 mt-1">
                            Your first achievement awaits!
                          </p>
                        </>
                      ) : exceedsGoal ? (
                        <>
                          <p className="text-sm text-purple-100">
                            🎉 Exceptional performance! You've surpassed your target by {exceedancePercentage}%!
                          </p>
                          <p className="text-sm text-purple-100 mt-1">
                            Continue this outstanding momentum!
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-purple-100">
                            Excellent progress! You're on track to achieve your target.
                          </p>
                          <p className="text-sm text-purple-100 mt-1">
                            {sprintGoal - currentMonthSprints} more sprint{sprintGoal - currentMonthSprints !== 1 ? 's' : ''} to reach your goal!
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
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
                  <Card className="shadow-lg border-2 border-purple-100">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                        <span>My Performance vs. My Team Average</span>
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
                          <RechartsTooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="myPoints" 
                            stroke="#7c3aed" 
                            strokeWidth={3}
                            dot={{ fill: '#7c3aed', strokeWidth: 2, r: 6 }}
                            name="My Sprints"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="teamAverage" 
                            stroke="#a855f7" 
                            strokeWidth={3}
                            strokeDasharray="5 5"
                            dot={{ fill: '#a855f7', strokeWidth: 2, r: 6 }}
                            name="Team Sprints"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sprints" className="space-y-6">
                  <Card className="shadow-lg border-2 border-purple-100">
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
                          <Select value={sprintFilter} onValueChange={setSprintFilter}>
                            <SelectTrigger className="w-40">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All</SelectItem>
                              <SelectItem value="current-month">Current Month</SelectItem>
                              <SelectItem value="last-month">Last Month</SelectItem>
                            </SelectContent>
                          </Select>
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
                            className="grid grid-cols-4 gap-4 items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-100"
                          >
                            <div>
                              <p className="font-medium text-gray-900">{sprint.title}</p>
                              {sprint.subtitle && (
                                <p className="text-sm text-gray-500">{sprint.subtitle}</p>
                              )}
                            </div>
                            <div className="text-sm text-gray-700">{sprint.query}</div>
                            <div className="text-sm text-gray-700">
                              {sprint.hasSubmittedFeedback ? (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span className="cursor-help border-b border-dotted border-gray-400">
                                      {sprint.feedback}
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Feedback submitted: "{sprint.feedback}"</p>
                                  </TooltipContent>
                                </Tooltip>
                              ) : (
                                <span className="text-gray-400">No feedback</span>
                              )}
                            </div>
                            <div>
                              {getStatusBadge(sprint.hasSubmittedFeedback)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="content" className="space-y-6">
                  <Card className="shadow-lg border-2 border-purple-100">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-gray-900">Top Content</CardTitle>
                        <div className="flex space-x-2">
                          <Button
                            variant={contentView === 'my' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setContentView('my')}
                          >
                            My Top Content
                          </Button>
                          <Button
                            variant={contentView === 'team' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setContentView('team')}
                          >
                            Team Top Content
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {topContent.map((item) => (
                          <Card key={item.id} className="p-4 hover:shadow-md transition-shadow border-l-4 border-l-purple-500 bg-purple-50">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium text-gray-900 flex-1">{item.title}</h3>
                              <div className="flex space-x-1 ml-2">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="h-8 w-8 p-0"
                                      onClick={() => copyToClipboard(item.title)}
                                    >
                                      <Copy className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Copy title</p>
                                  </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="h-8 w-8 p-0"
                                      onClick={() => initiateTeamsSearch(item.title)}
                                    >
                                      <MessageSquare className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Copy and New Search in Teams</p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <Badge className={`${item.feedback === 'Save time' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'} border-0 text-xs`}>
                                {item.feedback}
                              </Badge>
                              <span className="text-xs text-gray-500">{item.popularity}% popular</span>
                            </div>
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
    </TooltipProvider>
  );
};

export default IndexVariant;
