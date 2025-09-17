
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';

const Progress = () => {
  const performanceData = [
    { month: '2024-12', myPoints: 8, teamAverage: 12 },
    { month: '2025-01', myPoints: 6, teamAverage: 10 },
    { month: '2025-02', myPoints: 14, teamAverage: 11 },
    { month: '2025-03', myPoints: 16, teamAverage: 13 },
    { month: '2025-04', myPoints: 11, teamAverage: 14 },
    { month: '2025-05', myPoints: 5, teamAverage: 15 },
    { month: '2025-06', myPoints: 8, teamAverage: 4 },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Progress Dashboard</h1>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              My Performance vs. My Team Average
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
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
                  name="Your Queries"
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
      </div>
    </div>
  );
};

export default Progress;
