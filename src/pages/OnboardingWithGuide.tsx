
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Clock, Award, Zap, BookOpen, Star, MessageCircle, Activity, Search, ThumbsUp } from 'lucide-react';

const OnboardingWithGuide = () => {
  const sprintGoal = 5;
  const currentMonthSprints = 0;
  const progressPercentage = 0;

  const guideSteps = [
    {
      number: 1,
      title: "Respond to prompt",
      description: "Start by answering questions to personalize your decision making experience",
      icon: MessageCircle,
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Specify your activity",
      description: "Choose your focus area",
      icon: Activity,
      color: "bg-blue-600"
    },
    {
      number: 3,
      title: "Do a search",
      description: "Explore relevant sprints tailored to your search criteria",
      icon: Search,
      color: "bg-blue-700"
    },
    {
      number: 4,
      title: "Consume content & provide feedback",
      description: "Engage with materials and share insights to enhance your journey",
      icon: ThumbsUp,
      color: "bg-blue-800"
    }
  ];

  const sprintsGuideSteps = [
    {
      number: 1,
      title: "View sprint title",
      description: "See the title of each content item/sprint you've accessed",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Review your query",
      description: "Check the search query that was used to retrieve each sprint",
      icon: Search,
      color: "bg-blue-600"
    },
    {
      number: 3,
      title: "Check your feedback",
      description: "View any feedback you've provided for completed sprints",
      icon: ThumbsUp,
      color: "bg-blue-700"
    },
    {
      number: 4,
      title: "Monitor status",
      description: "Track whether sprint is Complete or 'Please attend huddle'",
      icon: Target,
      color: "bg-blue-800"
    }
  ];

  const contentGuideSteps = [
    {
      number: 1,
      title: "Explore curated content",
      description: "Discover top-rated content tailored to your industry and role",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Engage with materials",
      description: "Read, watch, and interact with high-quality learning resources",
      icon: Activity,
      color: "bg-blue-600"
    },
    {
      number: 3,
      title: "Rate and review",
      description: "Share your feedback to help improve content recommendations",
      icon: Star,
      color: "bg-blue-700"
    },
    {
      number: 4,
      title: "Share insights",
      description: "Collaborate with your team by sharing key learnings and insights",
      icon: MessageCircle,
      color: "bg-blue-800"
    }
  ];

  const handleStartJourney = () => {
    // This would initiate the chatbot search functionality
    console.log("Starting journey - initiating chatbot search");
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Left side - Brand only */}
              <div className="text-2xl font-bold text-blue-900">h'alt®</div>
              
              {/* Right side - Welcome and Avatar */}
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
                      strokeDashoffset={`${2 * Math.PI * 28}`}
                      className="transition-all duration-500 drop-shadow-sm"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Welcome, parag</p>
                  <p className="text-sm text-blue-600">Ready to power up? 👋</p>
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
                  {/* Target Banner */}
                  <div className="bg-blue-500 rounded-lg p-3 border border-blue-400">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">Target</span>
                      <span className="text-white font-medium text-sm">5 Sprints</span>
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

            {/* Right Column - Content with Guide */}
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
                      <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-6">
                        <div className="text-center">
                          <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-gray-400" />
                          </div>
                          <p className="text-gray-500 font-medium">No data yet</p>
                          <p className="text-gray-400 text-sm">Start your first sprint to see your progress</p>
                        </div>
                      </div>

                      {/* Getting Started Guide */}
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          Getting Started Guide
                        </h3>
                        <p className="text-blue-700 text-sm mb-6">Follow these simple steps to begin your journey:</p>
                        
                        <div className="space-y-4">
                          {guideSteps.map((step) => {
                            const IconComponent = step.icon;
                            return (
                              <div key={step.number} className="flex items-start space-x-4">
                                <div className={`${step.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>
                                  <span className="text-sm font-bold">{step.number}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <IconComponent className="h-4 w-4 text-gray-600" />
                                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                                  </div>
                                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800 font-medium">💡 Pro Tip</p>
                          <p className="text-sm text-blue-700 mt-1">
                            Complete your first sprint to unlock performance tracking and see how you compare with your team!
                          </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6">
                          <Button 
                            onClick={handleStartJourney}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                          >
                            Start Your Journey
                          </Button>
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
                      <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-6">
                        <div className="text-center">
                          <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Clock className="h-8 w-8 text-blue-500" />
                          </div>
                          <p className="text-gray-700 font-medium">No sprints yet</p>
                          <p className="text-gray-500 text-sm">Your learning journey begins with your first sprint</p>
                        </div>
                      </div>

                      {/* Sprint Management Guide */}
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          Sprint Management Guide
                        </h3>
                        <p className="text-blue-700 text-sm mb-6">View and manage your sprint history:</p>
                        
                        <div className="space-y-4">
                          {sprintsGuideSteps.map((step) => {
                            const IconComponent = step.icon;
                            return (
                              <div key={step.number} className="flex items-start space-x-4">
                                <div className={`${step.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>
                                  <span className="text-sm font-bold">{step.number}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <IconComponent className="h-4 w-4 text-gray-600" />
                                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                                  </div>
                                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800 font-medium">🎯 Sprint Tip</p>
                          <p className="text-sm text-blue-700 mt-1">
                            Set aside dedicated time for each sprint to maximize your learning and retention!
                          </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6">
                          <Button 
                            onClick={handleStartJourney}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                          >
                            Browse Available Sprints
                          </Button>
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
                      <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-6">
                        <div className="text-center">
                          <div className="p-4 bg-yellow-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Award className="h-8 w-8 text-yellow-500" />
                          </div>
                          <p className="text-gray-700 font-medium">Content coming soon</p>
                          <p className="text-gray-500 text-sm">Top content will appear as you and your team engage</p>
                        </div>
                      </div>

                      {/* Content Discovery Guide */}
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          Content Discovery Guide
                        </h3>
                        <p className="text-blue-700 text-sm mb-6">Maximize your learning with premium content:</p>
                        
                        <div className="space-y-4">
                          {contentGuideSteps.map((step) => {
                            const IconComponent = step.icon;
                            return (
                              <div key={step.number} className="flex items-start space-x-4">
                                <div className={`${step.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>
                                  <span className="text-sm font-bold">{step.number}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <IconComponent className="h-4 w-4 text-gray-600" />
                                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                                  </div>
                                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800 font-medium">⭐ Content Tip</p>
                          <p className="text-sm text-blue-700 mt-1">
                            Highly-rated content appears here based on team engagement and feedback scores!
                          </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6">
                          <Button 
                            onClick={handleStartJourney}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                          >
                            Explore Premium Content
                          </Button>
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

export default OnboardingWithGuide;
