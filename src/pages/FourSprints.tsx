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
import { Search, Filter, Grid, List, TrendingUp, Target, Clock, Award, Zap, BookOpen, Star, Trophy, Info, Copy, MessageSquare, Crown } from 'lucide-react';

const FourSprints = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sprintFilter, setSprintFilter] = useState('current-month');
  const [contentView, setContentView] = useState<'my' | 'team'>('my');
  const [currentPerformerIndex, setCurrentPerformerIndex] = useState(0);

  // Sample data for charts
  const performanceData = [
    { month: '2024-12', myPoints: 8, teamAverage: 12 },
    { month: '2025-01', myPoints: 6, teamAverage: 10 },
    { month: '2025-02', myPoints: 14, teamAverage: 11 },
    { month: '2025-03', myPoints: 16, teamAverage: 13 },
    { month: '2025-04', myPoints: 11, teamAverage: 14 },
    { month: '2025-05', myPoints: 5, teamAverage: 15 },
    { month: '2025-06', myPoints: 4, teamAverage: 4 },
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
      title: "Offshore weather and environmental conditions",
      subtitle: "",
      query: "Planning for difficult weather conditions",
      feedback: "Improve quality",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
    {
      id: 4,
      title: "Safety Equipment Maintenance Guide",
      subtitle: "",
      query: "Safety protocols",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
    // Previous month sprints (keeping these for comparison)
    {
      id: 9,
      title: "Previous Month Sprint 1",
      subtitle: "",
      query: "Historical data",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-05'
    },
    {
      id: 10,
      title: "Previous Month Sprint 2",
      subtitle: "",
      query: "Historical analysis",
      feedback: "Improve quality",
      hasSubmittedFeedback: true,
      month: '2025-05'
    }
  ];

  const topContent = [
    { id: 1, title: "Wind Turbine Maintenance Best Practices", feedback: "Save time", popularity: 95 },
    { id: 2, title: "Offshore Safety Protocols", feedback: "Improve quality", popularity: 88 },
    { id: 3, title: "Equipment Troubleshooting Guide", feedback: "Save time", popularity: 82 },
    { id: 4, title: "Emergency Response Procedures", feedback: "Improve quality", popularity: 79 }
  ];

  // Top performers data - can have multiple performers
  const topPerformers = [
    { name: "Sarah Chen", location: "Aberdeen Site" },
    { name: "Mike Johnson", location: "North Sea Platform" },
    { name: "Alex Rodriguez", location: "Offshore Platform B" }
  ];

  // Cycle through top performers every 3 seconds when there are multiple
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
      return <Badge className="bg-green-100 text-green-800 border-green-200">Complete</Badge>;
    } else {
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Please attend huddle</Badge>;
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
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Left side - Brand only */}
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-900">h'alt®</div>
              </div>
              
              {/* Right side - Welcome and Profile */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <svg className="absolute -inset-2 w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                      className="opacity-30"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#1e40af"
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
                  <p className="text-lg font-semibold text-gray-900">Welcome Back, parag</p>
                  <p className="text-sm text-blue-600">Ready to power up? 👋</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Data Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-4 bg-white border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-600">This Month</p>
                    <p className="text-2xl font-bold text-blue-800">{currentMonthSprints}</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-xs text-blue-500 cursor-help border-b border-dotted border-blue-400">
                          - 1 from last month
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>You started 1 less sprint this month compared to last month</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-blue-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total number of learning sprints you've started this month</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>
            
            <Card className="p-4 bg-white border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                    <Trophy className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-600">Completed</p>
                    <p className="text-2xl font-bold text-blue-800">{completedCurrentMonth}</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-xs text-blue-500 cursor-help border-b border-dotted border-blue-400">
                          {currentMonthCompletionRate}% this month
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{currentMonthCompletionRate}% of your sprints this month have been completed with feedback</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-blue-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sprints completed with feedback submitted this month</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>
            
            <Card className="p-4 bg-white border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-600">Streak</p>
                    <p className="text-2xl font-bold text-blue-800">3</p>
                    <p className="text-xs text-blue-500">days in a row</p>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-blue-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Consecutive days with sprint activity</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>

            <Card className="p-4 bg-white border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                    <Crown className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="min-h-[60px] flex flex-col justify-center">
                    <p className="text-xs text-blue-600">Top Performer{topPerformers.length > 1 ? 's' : ''}</p>
                    <div className="transition-all duration-500 ease-in-out">
                      <p className="text-lg font-bold text-blue-800">{topPerformers[currentPerformerIndex].name}</p>
                      <p className="text-xs text-blue-500">from {topPerformers[currentPerformerIndex].location}</p>
                    </div>
                    <p className="text-xs text-blue-500">Last Month</p>
                    {topPerformers.length > 1 && (
                      <div className="flex space-x-1 mt-1">
                        {topPerformers.map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                              index === currentPerformerIndex ? 'bg-blue-600' : 'bg-blue-200'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-8 w-8 p-0 border border-blue-200"
                      onClick={() => console.log(`Opening Teams to contact ${topPerformers[currentPerformerIndex].name}`)}
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reach out to {topPerformers[currentPerformerIndex].name} to celebrate their win!</p>
                  </TooltipContent>
                </Tooltip>
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
                    Stay ahead of risks and make confident decisions. Dive into your expert content today.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  {/* Target Banner */}
                  <div className="bg-blue-500 rounded-lg p-3 border border-blue-400">
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
                        variant={exceedsGoal ? "exceeds" : currentMonthSprints >= sprintGoal ? "success" : "default"}
                        className={`h-3 ${exceedsGoal ? 'bg-white/20' : 'bg-blue-500/30'}`} 
                      />
                      {exceedsGoal && (
                        <div className="text-xs text-blue-100 text-center">
                          <span className="font-bold">+{exceedancePercentage}%</span> above target!
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      {currentMonthSprints === 0 ? (
                        <>
                          <p className="text-sm text-blue-100">
                            Ready to start powering up?
                          </p>
                          <p className="text-sm text-blue-100 mt-1">
                            Your first sprint awaits!
                          </p>
                        </>
                      ) : exceedsGoal ? (
                        <>
                          <p className="text-sm text-blue-100">
                            🎉 Outstanding work! You've exceeded the target by {exceedancePercentage}%!
                          </p>
                          <p className="text-sm text-blue-100 mt-1">
                            Keep up the fantastic learning momentum!
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-blue-100">
                            Great progress! Just {sprintGoal - currentMonthSprints} more sprint{sprintGoal - currentMonthSprints > 1 ? 's' : ''} to reach your target.
                          </p>
                          <p className="text-sm text-blue-100 mt-1">
                            You're {Math.round(progressPercentage)}% of the way there!
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Performance Chart */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis 
                          dataKey="month" 
                          fontSize={12}
                          tick={{ fill: '#6b7280' }}
                        />
                        <YAxis 
                          fontSize={12}
                          tick={{ fill: '#6b7280' }}
                        />
                        <RechartsTooltip 
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '12px'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="myPoints" 
                          stroke="#3b82f6" 
                          strokeWidth={3}
                          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                          name="My Queries"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="teamAverage" 
                          stroke="#10b981" 
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                          name="Team Average"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8">
            <Tabs defaultValue="sprints" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                <TabsTrigger value="sprints" className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>My Queries</span>
                </TabsTrigger>
                <TabsTrigger value="content" className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Top Content</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sprints" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <CardTitle className="text-lg font-semibold text-gray-900">My Queries</CardTitle>
                      <div className="flex items-center space-x-2">
                        <div className="relative flex-1 sm:w-64">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Search Queries"
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
                      <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                        <div>Query</div>
                        <div>Sprint Title</div>
                        <div>Feedback</div>
                        <div>Status</div>
                      </div>
                      <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 space-y-4">
                        {filteredSprints.map((sprint) => (
                          <div 
                            key={sprint.id} 
                            className="grid grid-cols-4 gap-4 items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="text-sm text-foreground">{sprint.query}</div>
                            <div>
                              <p className="font-medium text-foreground">{sprint.title}</p>
                              {sprint.subtitle && (
                                <p className="text-sm text-muted-foreground">{sprint.subtitle}</p>
                              )}
                            </div>
                            <div className="text-sm text-foreground">
                              {sprint.hasSubmittedFeedback ? (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span className="cursor-help border-b border-dotted border-muted-foreground">
                                      {sprint.feedback}
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Feedback submitted: "{sprint.feedback}"</p>
                                  </TooltipContent>
                                </Tooltip>
                              ) : (
                                <span className="text-muted-foreground">No feedback</span>
                              )}
                            </div>
                            <div>
                              {getStatusBadge(sprint.hasSubmittedFeedback)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <Card className="shadow-lg">
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
                        <Card key={item.id} className="p-4 hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
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
                            <Badge className={`${item.feedback === 'Save time' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} border-0 text-xs`}>
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
    </TooltipProvider>
  );
};

export default FourSprints;
