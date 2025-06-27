
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TrendingUp, Target, Award, CheckCircle2, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

const NegativeProgress = () => {
  // Sample data showing negative trends compared to main page
  const currentMonthSprints = 8;
  const completedCurrentMonth = 3;
  const currentMonthCompletionRate = 38;
  const currentStreak = 2;
  
  // Multiple top performers for carousel (same as main page)
  const topPerformers = [
    { name: 'Sarah Chen', sprints: 12, avatar: '👩‍💼' },
    { name: 'Alex Rodriguez', sprints: 12, avatar: '👨‍💻' },
    { name: 'Maya Patel', sprints: 12, avatar: '👩‍🔬' }
  ];

  const [currentPerformerIndex, setCurrentPerformerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPerformerIndex((prev) => (prev + 1) % topPerformers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentPerformer = topPerformers[currentPerformerIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sprint Dashboard</h1>
            <p className="text-gray-600 mt-2">Track your development progress and performance</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Current Sprints Card */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Sprints</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-600">This Month</p>
                  <p className="text-2xl font-bold text-blue-800">{currentMonthSprints}</p>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-xs text-red-500 cursor-help border-b border-dotted border-red-400">
                        - 5 from last month
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>You started 5 fewer sprints this month compared to last month (13 last month)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Sprints Card */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completed Sprints</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-600">Completed</p>
                  <p className="text-2xl font-bold text-blue-800">{completedCurrentMonth}</p>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-xs text-red-500 cursor-help border-b border-dotted border-red-400">
                        {currentMonthCompletionRate}% this month
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{currentMonthCompletionRate}% of your sprints this month have been completed with feedback (down from 71% last month)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Streak Card */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Streak</CardTitle>
              <Flame className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-red-600">Days Active</p>
                  <p className="text-2xl font-bold text-red-800">{currentStreak}</p>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-xs text-red-500 cursor-help border-b border-dotted border-red-400">
                        - 6 from last month
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your streak dropped by 6 days compared to last month's peak (8 days last month)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="p-3 bg-red-50 rounded-full">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Performer Card */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Top Performer{topPerformers.length > 1 ? 's' : ''}
              </CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="transition-all duration-500 ease-in-out">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xl">{currentPerformer.avatar}</span>
                    <p className="text-xs text-yellow-600">This Month</p>
                  </div>
                  <p className="text-lg font-bold text-yellow-800">{currentPerformer.name}</p>
                  <p className="text-xs text-yellow-600">{currentPerformer.sprints} sprints</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-full">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              
              {topPerformers.length > 1 && (
                <div className="flex justify-center space-x-1 mt-3">
                  {topPerformers.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        index === currentPerformerIndex ? 'bg-yellow-600' : 'bg-yellow-200'
                      }`}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NegativeProgress;
