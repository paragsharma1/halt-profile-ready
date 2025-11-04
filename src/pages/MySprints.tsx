
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Grid, List, ChevronDown, ChevronRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const MySprints = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sprintFilter, setSprintFilter] = useState('current-month');
  const [memberFilter, setMemberFilter] = useState('all');

  // Current user (you)
  const currentUser = 'You';
  
  const sprintData = [
    // Your queries
    {
      id: 1,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06',
      team: 'Team Alpha',
      member: currentUser,
      isCurrentUser: true
    },
    {
      id: 2,
      title: "Equipment Testing Procedures",
      subtitle: "",
      query: "Testing protocols",
      feedback: "Improve quality",
      hasSubmittedFeedback: false,
      month: '2025-06',
      team: 'Team Beta',
      member: currentUser,
      isCurrentUser: true
    },
    {
      id: 3,
      title: "Safety Equipment Maintenance Guide",
      subtitle: "",
      query: "Safety protocols",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06',
      team: 'Team Gamma',
      member: currentUser,
      isCurrentUser: true
    },
    // Team Alpha members
    {
      id: 4,
      title: "Test Content - Wind Turbine Blade Replacement",
      subtitle: "",
      query: "Wind Turbine Blade Replacement",
      feedback: "Save time",
      hasSubmittedFeedback: false,
      month: '2025-06',
      team: 'Team Alpha',
      member: 'Bob Smith',
      isCurrentUser: false
    },
    {
      id: 5,
      title: "Emergency Response Training",
      subtitle: "",
      query: "Emergency procedures",
      feedback: "Improve quality",
      hasSubmittedFeedback: false,
      month: '2025-06',
      team: 'Team Alpha',
      member: 'Charlie Brown',
      isCurrentUser: false
    },
    // Team Beta members
    {
      id: 6,
      title: "Offshore weather and environmental conditions",
      subtitle: "",
      query: "Planning for difficult weather conditions",
      feedback: "Improve quality",
      hasSubmittedFeedback: true,
      month: '2025-06',
      team: 'Team Beta',
      member: 'Carol White',
      isCurrentUser: false
    },
    {
      id: 7,
      title: "How to plan and conduct a live evaluation of your ERP",
      subtitle: "",
      query: "Planning for difficult weather conditions",
      feedback: "Improve quality",
      hasSubmittedFeedback: false,
      month: '2025-06',
      team: 'Team Beta',
      member: 'David Lee',
      isCurrentUser: false
    },
    {
      id: 8,
      title: "Risk Assessment Documentation",
      subtitle: "",
      query: "Risk management",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06',
      team: 'Team Beta',
      member: 'Grace Kim',
      isCurrentUser: false
    },
    {
      id: 9,
      title: "Quality Assurance Checklist",
      subtitle: "",
      query: "Quality control",
      feedback: "Improve quality",
      hasSubmittedFeedback: false,
      month: '2025-06',
      team: 'Team Beta',
      member: 'Henry Zhang',
      isCurrentUser: false
    },
    // Team Gamma members
    {
      id: 10,
      title: "Equipment Inspection Checklist",
      subtitle: "",
      query: "Inspection procedures",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06',
      team: 'Team Gamma',
      member: 'Eve Martinez',
      isCurrentUser: false
    },
    {
      id: 11,
      title: "Maintenance Schedule Update",
      subtitle: "",
      query: "Maintenance planning",
      feedback: "Save time",
      hasSubmittedFeedback: true,
      month: '2025-06',
      team: 'Team Gamma',
      member: 'Frank Davis',
      isCurrentUser: false
    }
  ];

  const teamMembers = {
    'Team Alpha': [currentUser, 'Bob Smith', 'Charlie Brown'],
    'Team Beta': [currentUser, 'Carol White', 'David Lee', 'Grace Kim', 'Henry Zhang'],
    'Team Gamma': [currentUser, 'Eve Martinez', 'Frank Davis']
  };

  // Get teams user belongs to
  const myTeams = Object.keys(teamMembers).filter(team => 
    teamMembers[team as keyof typeof teamMembers].includes(currentUser)
  );

  const teams = ['Team Alpha', 'Team Beta', 'Team Gamma'];
  
  const getTeamAggregates = () => {
    return teams.map(teamName => {
      const teamSprints = sprintData.filter(sprint => sprint.team === teamName);
      const totalQueries = teamSprints.length;
      const completeCount = teamSprints.filter(sprint => sprint.hasSubmittedFeedback).length;
      const pleaseAttendHuddleCount = teamSprints.filter(sprint => !sprint.hasSubmittedFeedback).length;
      
      return {
        team: teamName,
        totalQueries,
        completeCount,
        pleaseAttendHuddleCount,
        memberCount: teamMembers[teamName as keyof typeof teamMembers].length
      };
    });
  };

  const getMemberStats = () => {
    const stats: Record<string, { total: number; complete: number; huddle: number; team: string }> = {};
    
    sprintData.forEach(sprint => {
      if (!stats[sprint.member]) {
        stats[sprint.member] = { total: 0, complete: 0, huddle: 0, team: sprint.team };
      }
      stats[sprint.member].total++;
      if (sprint.hasSubmittedFeedback) {
        stats[sprint.member].complete++;
      } else {
        stats[sprint.member].huddle++;
      }
    });
    
    return stats;
  };

  const [expandedTeams, setExpandedTeams] = useState<string[]>([]);

  const toggleTeamExpansion = (teamName: string) => {
    setExpandedTeams(prev => 
      prev.includes(teamName) 
        ? prev.filter(t => t !== teamName)
        : [...prev, teamName]
    );
  };

  const getStatusBadge = (hasSubmittedFeedback: boolean) => {
    if (hasSubmittedFeedback) {
      return <Badge className="bg-green-100 text-green-800 border-green-200">Complete</Badge>;
    } else {
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Please attend huddle</Badge>;
    }
  };

  const filteredSprints = sprintData.filter(sprint => {
    const matchesSearch = sprint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sprint.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sprint.member.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMember = memberFilter === 'all' || sprint.member === memberFilter;
    
    if (sprintFilter === 'current-month') {
      return matchesSearch && matchesMember && sprint.month === '2025-06';
    } else if (sprintFilter === 'last-month') {
      return matchesSearch && matchesMember && sprint.month === '2025-05';
    }
    return matchesSearch && matchesMember;
  });

  // Get unique members for filter
  const uniqueMembers = Array.from(new Set(sprintData.map(s => s.member))).sort();

  const teamAggregates = getTeamAggregates();
  const memberStats = getMemberStats();

  // Calculate "My Data" (current user's aggregate)
  const myPersonalData = sprintData.filter(s => s.isCurrentUser);
  const myData = {
    total: myPersonalData.length,
    complete: myPersonalData.filter(s => s.hasSubmittedFeedback).length,
    huddle: myPersonalData.filter(s => !s.hasSubmittedFeedback).length
  };

  // Calculate team data for teams I'm in
  const myTeamsData = myTeams.map(teamName => {
    const teamSprints = sprintData.filter(s => s.team === teamName);
    return {
      team: teamName,
      total: teamSprints.length,
      complete: teamSprints.filter(s => s.hasSubmittedFeedback).length,
      huddle: teamSprints.filter(s => !s.hasSubmittedFeedback).length
    };
  });

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Your Queries</h1>
          
          {/* Performance Overview Section */}
          <div className="mb-6 space-y-4">
            {/* My Personal Data */}
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-sm font-semibold text-primary mb-3">My Personal Performance</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Total Queries</div>
                  <div className="text-2xl font-bold text-foreground">{myData.total}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Complete</div>
                  <div className="text-2xl font-bold text-green-600">{myData.complete}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Pending Huddle</div>
                  <div className="text-2xl font-bold text-amber-600">{myData.huddle}</div>
                </div>
              </div>
            </div>

            {/* My Teams Data */}
            <div className="p-4 bg-muted/20 rounded-lg">
              <h3 className="text-sm font-semibold mb-3">My Teams Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {myTeamsData.map((teamData) => (
                  <div key={teamData.team} className="p-3 bg-background rounded border">
                    <div className="font-medium text-sm mb-2">{teamData.team}</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total:</span>
                        <span className="font-semibold">{teamData.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Complete:</span>
                        <span className="font-semibold text-green-600">{teamData.complete}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pending:</span>
                        <span className="font-semibold text-amber-600">{teamData.huddle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Teams Comparison */}
            <div className="p-4 bg-muted/20 rounded-lg">
              <h3 className="text-sm font-semibold mb-3">All Teams Overview</h3>
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  <div className="grid grid-cols-5 gap-3 text-xs font-medium text-muted-foreground pb-2 border-b mb-2">
                    <div>Team</div>
                    <div className="text-center">Members</div>
                    <div className="text-center">Total</div>
                    <div className="text-center">Complete</div>
                    <div className="text-center">Pending</div>
                  </div>
                  {teamAggregates.map((aggregate) => (
                    <div key={aggregate.team}>
                      <div 
                        className="grid grid-cols-5 gap-3 py-2 px-2 hover:bg-muted/50 rounded cursor-pointer transition-colors text-sm"
                        onClick={() => toggleTeamExpansion(aggregate.team)}
                      >
                        <div className="font-medium flex items-center gap-1">
                          {expandedTeams.includes(aggregate.team) ? (
                            <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ChevronRight className="h-3 w-3" />
                          )}
                          {aggregate.team}
                          {myTeams.includes(aggregate.team) && (
                            <Badge variant="secondary" className="ml-1 text-[10px] px-1 py-0">My Team</Badge>
                          )}
                        </div>
                        <div className="text-center">{aggregate.memberCount}</div>
                        <div className="text-center font-semibold">{aggregate.totalQueries}</div>
                        <div className="text-center font-semibold text-green-600">{aggregate.completeCount}</div>
                        <div className="text-center font-semibold text-amber-600">{aggregate.pleaseAttendHuddleCount}</div>
                      </div>
                      
                      {/* Member Details */}
                      {expandedTeams.includes(aggregate.team) && (
                        <div className="ml-6 mt-2 mb-3 p-3 bg-muted/30 rounded border">
                          <div className="text-xs font-semibold mb-2">Team Members</div>
                          <div className="space-y-2">
                            {teamMembers[aggregate.team as keyof typeof teamMembers].map(member => {
                              const stats = memberStats[member] || { total: 0, complete: 0, huddle: 0 };
                              const isMe = member === currentUser;
                              return (
                                <div 
                                  key={member} 
                                  className={`grid grid-cols-4 gap-3 py-2 px-3 rounded text-xs ${
                                    isMe ? 'bg-primary/10 border border-primary/20' : 'bg-background'
                                  }`}
                                >
                                  <div className="font-medium flex items-center gap-1">
                                    {member}
                                    {isMe && <Badge variant="default" className="ml-1 text-[10px] px-1 py-0">You</Badge>}
                                  </div>
                                  <div className="text-center">{stats.total}</div>
                                  <div className="text-center text-green-600">{stats.complete}</div>
                                  <div className="text-center text-amber-600">{stats.huddle}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-lg border">
            <CardHeader className="border-b bg-muted/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-lg font-semibold text-foreground">Sprint Overview</CardTitle>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
                    <SelectContent className="bg-background">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="current-month">Current Month</SelectItem>
                      <SelectItem value="last-month">Last Month</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={memberFilter} onValueChange={setMemberFilter}>
                    <SelectTrigger className="w-44">
                      <SelectValue placeholder="All Members" />
                    </SelectTrigger>
                    <SelectContent className="bg-background">
                      <SelectItem value="all">All Members</SelectItem>
                      {uniqueMembers.map(member => (
                        <SelectItem key={member} value={member}>{member}</SelectItem>
                      ))}
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
                <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                  <div>Member</div>
                  <div>Query</div>
                  <div>Content Viewed</div>
                  <div>Feedback</div>
                  <div>Status</div>
                </div>
                <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 space-y-3">
                  {filteredSprints.map((sprint) => (
                    <div 
                      key={sprint.id} 
                      className="grid grid-cols-5 gap-4 items-start p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-foreground">{sprint.member}</span>
                        <Badge variant="outline" className="text-xs w-fit">{sprint.team}</Badge>
                      </div>
                      <div className="text-sm text-foreground">{sprint.query}</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{sprint.title}</p>
                        {sprint.subtitle && (
                          <p className="text-xs text-muted-foreground">{sprint.subtitle}</p>
                        )}
                      </div>
                      <div className="text-sm text-foreground">
                        {sprint.hasSubmittedFeedback ? (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="cursor-help border-b border-dotted border-muted-foreground">
                                {sprint.feedback}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Feedback submitted: "{sprint.feedback}"</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <span className="text-muted-foreground">No feedback</span>
                        )}
                      </div>
                      <div>
                        {getStatusBadge(sprint.hasSubmittedFeedback)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MySprints;
