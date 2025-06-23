
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, MessageSquare } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const TopContent = () => {
  const [contentView, setContentView] = useState<'my' | 'team'>('my');

  const topContent = [
    { id: 1, title: "Wind Turbine Maintenance Best Practices", feedback: "Save time", popularity: 95 },
    { id: 2, title: "Offshore Safety Protocols", feedback: "Improve quality", popularity: 88 },
    { id: 3, title: "Equipment Troubleshooting Guide", feedback: "Save time", popularity: 82 },
    { id: 4, title: "Emergency Response Procedures", feedback: "Improve quality", popularity: 79 },
    { id: 5, title: "Risk Assessment Documentation", feedback: "Save time", popularity: 76 },
    { id: 6, title: "Safety Equipment Maintenance", feedback: "Improve quality", popularity: 73 }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const initiateTeamsSearch = (title: string) => {
    copyToClipboard(title);
    console.log(`Initiating Teams search with: ${title}`);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Top Content</h1>
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">Popular Learning Content</CardTitle>
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
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TopContent;
