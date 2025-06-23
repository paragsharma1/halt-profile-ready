import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Search, Filter, Grid, List, TrendingUp, Target, Clock, Award, Zap, BookOpen, Star, Trophy, Info, Copy, MessageSquare, Crown, Edit3, Plus, Minus, Check, X } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [userGoal, setUserGoal] = useState<number | null>(null);
  const [sprintFilter, setSprintFilter] = useState('current-month');
  const [contentView, setContentView] = useState<'my' | 'team'>('my');
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [tempGoal, setTempGoal] = useState<number>(6);

  // Sample data for charts
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
      subtitle: "(Filter: Vestas - Overview)",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06'
    },
    {
      id: 2,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "(Filter: Vestas - JPN_MS)",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      hasSubmittedFeedback: false,
      month: '2025-06'
    },
    {
      id: 3,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "(Filter: Vestas - Overview)",
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

  const organizationalGoal = 5;
  const currentGoal = userGoal || organizationalGoal;
  const progressPercentage = Math.min((currentMonthSprints / currentGoal) * 100, 100);

  const getProgressMessage = () => {
    if (progressPercentage >= 75) return "Excellent progress! You're almost there! 🚀";
    if (progressPercentage >= 50) return "Great work! Keep pushing forward! 💪";
    if (progressPercentage >= 25) return "Good start! You're building momentum! 📈";
    return "Let's get started on your learning journey! 🌟";
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const initiateTeamsSearch = (title: string) => {
    copyToClipboard(title);
    console.log(`Initiating Teams search with: ${title}`);
  };

  const handleGoalEdit = () => {
    setIsEditingGoal(true);
    setTempGoal(userGoal || organizationalGoal + 1);
  };

  const handleGoalSave = () => {
    if (tempGoal > organizationalGoal) {
      setUserGoal(tempGoal);
    }
    setIsEditingGoal(false);
  };

  const handleGoalCancel = () => {
    setIsEditingGoal(false);
    setTempGoal(userGoal || organizationalGoal + 1);
  };

  const incrementGoal = () => {
    setTempGoal(prev => prev + 1);
  };

  const decrementGoal = () => {
    setTempGoal(prev => Math.max(organizationalGoal + 1, prev - 1));
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Left side - Brand and Welcome */}
              <div className="flex items-center space-x-8">
                <img src="/images/halt-logo.png" alt="halt" className="h-8" />
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <svg className="absolute inset-0 w-12 h-12 transform -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-20"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 22}`}
                        strokeDashoffset={`${2 * Math.PI * 22 * (1 - progressPercentage / 100)}`}
                        className="transition-all duration-300"
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Data Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-100">This Month</p>
                    <p className="text-2xl font-bold">{currentMonthSprints}</p>
                    <p className="text-xs text-blue-100">sprints started</p>
                    <p className="text-xs text-blue-100">+ 3 from last month</p>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-blue-200 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total number of learning sprints you've started this month</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>
            
            <Card className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-green-100">Completed</p>
                    <p className="text-2xl font-bold">{completedCurrentMonth}</p>
                    <p className="text-xs text-green-100">{currentMonthCompletionRate}% this month</p>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-green-200 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sprints completed with feedback submitted this month</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>
            
            <Card className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-100">Streak</p>
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-xs text-purple-100">days in a row</p>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-purple-200 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Consecutive days with sprint activity</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Crown className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-100">Top Learner</p>
                    <p className="text-lg font-bold">Sarah Chen</p>
                    <p className="text-xs text-amber-100">Last Month</p>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-amber-100 hover:text-amber-50 hover:bg-amber-500/20 h-8 w-8 p-0"
                      onClick={() => console.log('Opening Teams to contact Sarah Chen')}
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reach out to Sarah to celebrate their win!</p>
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
                    Stay ahead of risks and make confident decisions. Dive into your expert content and accelerate your growth journey.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Organizational Goal</span>
                      <span className="text-sm font-bold bg-white/20 px-2 py-1 rounded-full">{organizationalGoal} Sprints</span>
                    </div>
                    
                    {userGoal && !isEditingGoal && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Your Goal</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold bg-green-500/30 px-2 py-1 rounded-full">{userGoal} Sprints</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleGoalEdit}
                            className="text-white hover:bg-white/20 h-6 w-6 p-0"
                          >
                            <Edit3 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {isEditingGoal && (
                      <div className="space-y-3">
                        <span className="text-sm font-medium">Set Your Goal</span>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={decrementGoal}
                            className="text-white hover:bg-white/20 h-8 w-8 p-0"
                            disabled={tempGoal <= organizationalGoal + 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <div className="bg-white/20 rounded-lg px-3 py-1 min-w-[60px] text-center">
                            <span className="text-lg font-bold">{tempGoal}</span>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={incrementGoal}
                            className="text-white hover:bg-white/20 h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={handleGoalSave}
                            className="bg-green-500 hover:bg-green-600 text-white flex-1"
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleGoalCancel}
                            className="text-white hover:bg-white/20 flex-1"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Progress value={progressPercentage} className="h-3 bg-blue-500" />
                      <div className="flex justify-between text-xs text-blue-100">
                        <span>{currentMonthSprints} of {currentGoal} completed</span>
                        <span>{Math.round(progressPercentage)}% there!</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm text-blue-100">{getProgressMessage()}</p>
                    </div>
                    
                    {!userGoal && !isEditingGoal && (
                      <Button
                        onClick={handleGoalEdit}
                        className="w-full bg-white/20 hover:bg-white/30 text-white border-0 flex items-center space-x-2"
                      >
                        <Edit3 className="h-4 w-4" />
                        <span>Set Your Goal</span>
                      </Button>
                    )}
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
                          <RechartsTooltip />
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
                            className="grid grid-cols-4 gap-4 items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
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
      </div>
    </TooltipProvider>
  );
};

export default Index;
