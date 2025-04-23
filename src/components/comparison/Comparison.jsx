import React from "react";
import RecommendedOption from "./RecommendedOption";
import BestValueOption from "./BestValueOption";
import SideBySideComparison from "./SideBySideComparison";
import CostAnalysis from "./CostAnalysis";
import VendorPerformanceBreakdown from "./VendorPerformanceBreakdown";

function Comparison() {
  return (
    <div>
      <RecommendedOption />
      <BestValueOption />
      <SideBySideComparison />
      <CostAnalysis />
      <VendorPerformanceBreakdown />
      <RecommendedOption />
    </div>
  );
}

export default Comparison;
