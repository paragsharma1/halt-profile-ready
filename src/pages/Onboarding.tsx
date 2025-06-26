
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TrendingUp, Target, Clock, Award, Zap, BookOpen, Star } from 'lucide-react';

const Onboarding = () => {
  const sprintGoal = 5;
  const currentMonthSprints = 0;
  const progressPercentage = 0;

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Left side - Brand and Welcome */}
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-blue-900">h'alt®</div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">?</span>
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
                        strokeDashoffset={`${2 * Math.PI * 28}`}
                        className="transition-all duration-500 drop-shadow-sm"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Welcome to h'alt®!</p>
                    <p className="text-sm text-blue-600">Let's get you started 🚀</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Empty State Data Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <Target className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">This Month</p>
                    <p className="text-2xl font-bold text-gray-400">0</p>
                    <p className="text-xs text-gray-400">sprints started</p>
                    <p className="text-xs text-gray-400">Start your journey!</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <Award className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Completed</p>
                    <p className="text-2xl font-bold text-gray-400">0</p>
                    <p className="text-xs text-gray-400">0% this month</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <Star className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Streak</p>
                    <p className="text-2xl font-bold text-gray-400">0</p>
                    <p className="text-xs text-gray-400">days in a row</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-white border-2 border-gray-200 shadow-sm opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <Target className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Top Performer</p>
                    <p className="text-lg font-bold text-gray-400">Coming Soon</p>
                    <p className="text-xs text-gray-400">Start sprinting!</p>
                  </div>
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
                    Stay ahead of risks and make confident decisions. Dive into your expert content today.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  {/* Organizational Goal Banner */}
                  <div className="bg-blue-500 rounded-lg p-3 border border-blue-400">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">Organisational Goal</span>
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
                        value={progressPercentage} 
                        className="h-3 bg-blue-500" 
                      />
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm text-blue-100">
                        Ready to start powering up?
                      </p>
                      <p className="text-sm text-blue-100 mt-1">
                        Your first sprint awaits!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Empty State Content */}
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
                      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        <div className="text-center">
                          <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-gray-400" />
                          </div>
                          <p className="text-gray-500 font-medium">No data yet</p>
                          <p className="text-gray-400 text-sm">Start your first sprint to see your progress</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sprints" className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900">My Sprints</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        <div className="text-center">
                          <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Clock className="h-8 w-8 text-blue-500" />
                          </div>
                          <p className="text-gray-700 font-medium">No sprints yet</p>
                          <p className="text-gray-500 text-sm">Your learning journey begins with your first sprint</p>
                        </div>
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
                      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        <div className="text-center">
                          <div className="p-4 bg-yellow-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Award className="h-8 w-8 text-yellow-500" />
                          </div>
                          <p className="text-gray-700 font-medium">Content coming soon</p>
                          <p className="text-gray-500 text-sm">Top content will appear as you and your team engage</p>
                        </div>
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

export default Onboarding;
