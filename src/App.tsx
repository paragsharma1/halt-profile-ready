
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Progress from "./pages/Progress";
import MySprints from "./pages/MySprints";
import TopContent from "./pages/TopContent";
import Onboarding from "./pages/Onboarding";
import OnboardingVariant from "./pages/OnboardingVariant";
import OnboardingWithGuide from "./pages/OnboardingWithGuide";
import NegativeProgress from "./pages/NegativeProgress";
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
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding-variant" element={<OnboardingVariant />} />
          <Route path="/onboarding-with-guide" element={<OnboardingWithGuide />} />
          <Route path="/negative-progress" element={<NegativeProgress />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
