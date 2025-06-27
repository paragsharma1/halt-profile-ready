
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TrendingDown, Target, Award, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const NegativeProgress = () => {
  // Sample data showing negative trends
  const currentMonthSprints = 8;
  const completedCurrentMonth = 3;
  const currentMonthCompletionRate = 38;
  
  // Multiple top performers for carousel
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
            <h1 className="text-3xl font-bold text-gray-900">Negative Performance Dashboard</h1>
            <p className="text-gray-600 mt-2">Example showing declining metrics compared to last month</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Current Sprints Card - Negative trend */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Sprints</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
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
                        <p>You started 5 fewer sprints this month compared to last month</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 bg-red-50 rounded-full cursor-help">
                      <TrendingDown className="h-6 w-6 text-red-600" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Declining trend - fewer sprints started this month</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>

          {/* Completed Sprints Card - Negative trend */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completed Sprints</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
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
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 bg-red-50 rounded-full cursor-help">
                      <TrendingDown className="h-6 w-6 text-red-600" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Completion rate decreased by 33% compared to last month</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>

          {/* Team Average Card - Negative trend */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Team Average</CardTitle>
              <Target className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-purple-600">Team Performance</p>
                  <p className="text-2xl font-bold text-purple-800">9.2</p>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-xs text-red-500 cursor-help border-b border-dotted border-red-400">
                        - 2.3 from last month
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Team average decreased by 2.3 sprints compared to last month</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 bg-red-50 rounded-full cursor-help">
                      <TrendingDown className="h-6 w-6 text-red-600" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Team performance is declining this month</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>

          {/* Top Performer Card - Cycling through multiple winners */}
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

        {/* Additional info section */}
        <Card className="bg-white shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-600" />
              Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Sprint Starts</h3>
                <p className="text-2xl font-bold text-red-600">-38%</p>
                <p className="text-sm text-red-600">vs last month</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Completion Rate</h3>
                <p className="text-2xl font-bold text-orange-600">-33%</p>
                <p className="text-sm text-orange-600">vs last month</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Team Average</h3>
                <p className="text-2xl font-bold text-red-600">-20%</p>
                <p className="text-sm text-red-600">vs last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NegativeProgress;
