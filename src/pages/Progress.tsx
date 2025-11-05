import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { useState } from 'react';

const Progress = () => {
  const [viewMode, setViewMode] = useState<'all' | 'single'>('all');
  const [selectedTeam, setSelectedTeam] = useState<string>('team1');

  const teams = [
    { id: 'team1', name: 'Team Alpha' },
    { id: 'team2', name: 'Team Beta' },
    { id: 'team3', name: 'Team Gamma' },
  ];

  // Static performance data - My performance vs team averages
  const performanceData = [
    { month: '2024-12', myPoints: 5, team1Average: 12, team2Average: 14, team3Average: 10 },
    { month: '2025-01', myPoints: 7, team1Average: 11, team2Average: 13, team3Average: 9 },
    { month: '2025-02', myPoints: 6, team1Average: 13, team2Average: 15, team3Average: 11 },
    { month: '2025-03', myPoints: 8, team1Average: 14, team2Average: 16, team3Average: 10 },
    { month: '2025-04', myPoints: 9, team1Average: 13, team2Average: 14, team3Average: 12 },
    { month: '2025-05', myPoints: 8, team1Average: 15, team2Average: 17, team3Average: 13 },
    { month: '2025-06', myPoints: 8, team1Average: 15, team2Average: 17, team3Average: 13 },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Progress Dashboard</h1>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                Your Performance vs. Team Average
              </CardTitle>
              <div className="flex items-center gap-6">
                <RadioGroup value={viewMode} onValueChange={(value) => setViewMode(value as 'all' | 'single')} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all" className="cursor-pointer">All Teams</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="single" />
                    <Label htmlFor="single" className="cursor-pointer">Single Team</Label>
                  </div>
                </RadioGroup>
                {viewMode === 'single' && (
                  <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {teams.map(team => (
                        <SelectItem key={team.id} value={team.id}>
                          {team.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
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
                  name="Your Sprints"
                />
                {viewMode === 'all' ? (
                  <>
                              <Line 
                                type="monotone" 
                                dataKey="team1Average" 
                                stroke="#60a5fa" 
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                dot={{ fill: '#60a5fa', strokeWidth: 2, r: 4 }}
                                name="Team Alpha"
                              />
                              <Line 
                                type="monotone" 
                                dataKey="team2Average" 
                                stroke="#93c5fd" 
                                strokeWidth={2}
                                strokeDasharray="3 3"
                                dot={{ fill: '#93c5fd', strokeWidth: 2, r: 4 }}
                                name="Team Beta"
                              />
                              <Line 
                                type="monotone" 
                                dataKey="team3Average" 
                                stroke="#1e40af" 
                                strokeWidth={2}
                                strokeDasharray="8 4"
                                dot={{ fill: '#1e40af', strokeWidth: 2, r: 4 }}
                                name="Team Gamma"
                              />
                  </>
                ) : (
                  <Line 
                    type="monotone" 
                    dataKey={`${selectedTeam}Average`}
                    stroke="#60a5fa" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#60a5fa', strokeWidth: 2, r: 6 }}
                    name={teams.find(t => t.id === selectedTeam)?.name}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
