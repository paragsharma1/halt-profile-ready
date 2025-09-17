import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Target, Users, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const NoSprintStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Learning Dashboard</h1>
              <p className="text-gray-600">Welcome back! Ready to start your learning journey?</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Today</p>
              <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Empty State Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Sprints Started</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">-%</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Learning Streak</p>
                <p className="text-2xl font-bold text-gray-900">0 days</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Team Ranking</p>
                <p className="text-2xl font-bold text-gray-900">-</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Getting Started Card */}
          <Card className="p-6">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No Sprints Started Yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't started any learning sprints yet. Begin your journey by creating your first sprint!
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full">
                  Start Your First Sprint
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Browse Learning Content
                </Button>
              </div>
            </div>
          </Card>

          {/* Progress Overview */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Learning Progress</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Overall Progress</span>
                  <Badge variant="secondary">0%</Badge>
                </div>
                <Progress value={0} variant="default" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Weekly Goal</span>
                  <Badge variant="secondary">0/5 sprints</Badge>
                </div>
                <Progress value={0} variant="default" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Skills Acquired</span>
                  <Badge variant="secondary">0 skills</Badge>
                </div>
                <Progress value={0} variant="default" />
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Ready to Begin?</h4>
              <p className="text-sm text-gray-600 mb-3">
                Start with a quick 15-minute learning sprint to build momentum.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Quick Start Guide
              </Button>
            </div>
          </Card>
        </div>

        {/* Suggested Actions */}
        <Card className="p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Set Learning Schedule</h4>
                <p className="text-sm text-gray-600">Plan your weekly learning time</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
              <Target className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Choose Learning Goals</h4>
                <p className="text-sm text-gray-600">Define what you want to achieve</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <Users className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Join Learning Groups</h4>
                <p className="text-sm text-gray-600">Connect with other learners</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation Links */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
          <Link to="/onboarding-with-guide">
            <Button variant="outline">View Onboarding</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoSprintStarted;