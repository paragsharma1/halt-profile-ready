
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Progress from "./pages/Progress";
import MySprints from "./pages/MySprints";
import TopContent from "./pages/TopContent";
import OnboardingWithGuide from "./pages/OnboardingWithGuide";
import FourSprints from "./pages/FourSprints";
import TeamAverage from "./pages/TeamAverage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/sprints" element={<MySprints />} />
          <Route path="/content" element={<TopContent />} />
          <Route path="/onboarding-with-guide" element={<OnboardingWithGuide />} />
          <Route path="/four-sprints" element={<FourSprints />} />
          <Route path="/team-average" element={<TeamAverage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
