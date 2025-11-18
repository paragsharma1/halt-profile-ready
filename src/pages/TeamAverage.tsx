import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

const TeamAverage = () => {
  // Performance data with combined team average
  const performanceData = [
    { month: '2024-12', myPoints: 5, team1Average: 12, team2Average: 14, team3Average: 10 },
    { month: '2025-01', myPoints: 7, team1Average: 11, team2Average: 13, team3Average: 9 },
    { month: '2025-02', myPoints: 6, team1Average: 13, team2Average: 15, team3Average: 11 },
    { month: '2025-03', myPoints: 8, team1Average: 14, team2Average: 16, team3Average: 10 },
    { month: '2025-04', myPoints: 9, team1Average: 13, team2Average: 14, team3Average: 12 },
    { month: '2025-05', myPoints: 8, team1Average: 15, team2Average: 17, team3Average: 13 },
    { month: '2025-06', myPoints: 8, team1Average: 15, team2Average: 17, team3Average: 13 },
  ];

  // Calculate combined team average
  const chartData = performanceData.map(data => ({
    month: data.month,
    myPoints: data.myPoints,
    teamAverage: Math.round((data.team1Average + data.team2Average + data.team3Average) / 3)
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">h'alt®</div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Average Comparison</h1>
          <p className="text-gray-600">Your performance compared to the combined average of Team Alpha, Beta, and Gamma</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-lg font-semibold text-gray-900">
                Your Sprints vs. Team Average
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
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
                  stroke="#5D30BF" 
                  strokeWidth={3}
                  dot={{ fill: '#5D30BF', strokeWidth: 2, r: 6 }}
                  name="Your Sprints"
                />
                <Line 
                  type="monotone" 
                  dataKey="teamAverage" 
                  stroke="#0B8AD9" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ fill: '#0B8AD9', strokeWidth: 2, r: 6 }}
                  name="Team Average (Alpha + Beta + Gamma)"
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-purple-600 font-medium mb-1">Your Average</p>
                    <p className="text-3xl font-bold text-purple-900">
                      {Math.round(chartData.reduce((sum, d) => sum + d.myPoints, 0) / chartData.length)}
                    </p>
                    <p className="text-xs text-purple-600 mt-1">Sprints per month</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-blue-600 font-medium mb-1">Team Average</p>
                    <p className="text-3xl font-bold text-blue-900">
                      {Math.round(chartData.reduce((sum, d) => sum + d.teamAverage, 0) / chartData.length)}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">Sprints per month</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-green-600 font-medium mb-1">Your Performance</p>
                    <p className="text-3xl font-bold text-green-900">
                      {(() => {
                        const myAvg = chartData.reduce((sum, d) => sum + d.myPoints, 0) / chartData.length;
                        const teamAvg = chartData.reduce((sum, d) => sum + d.teamAverage, 0) / chartData.length;
                        const diffNum = ((myAvg / teamAvg) * 100 - 100);
                        const diff = diffNum.toFixed(0);
                        return diffNum > 0 ? `+${diff}%` : `${diff}%`;
                      })()}
                    </p>
                    <p className="text-xs text-green-600 mt-1">vs. Team Average</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamAverage;
