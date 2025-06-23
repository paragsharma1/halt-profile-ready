
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Grid, List } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const MySprints = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sprintFilter, setSprintFilter] = useState('current-month');

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

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Sprints</h1>
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <CardTitle className="text-lg font-semibold text-gray-900">Sprint Overview</CardTitle>
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
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MySprints;
