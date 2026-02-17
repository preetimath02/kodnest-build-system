import AppLayout from "@/components/layout/AppLayout";
import PrimaryWorkspace from "@/components/layout/PrimaryWorkspace";
import SecondaryPanel from "@/components/layout/SecondaryPanel";

const Index = () => {
  return (
    <AppLayout
      projectName="KodNest Premium"
      currentStep={1}
      totalSteps={6}
      status="in-progress"
      headline="Design System Reference"
      subtext="Every token, component, and pattern used across the KodNest Premium Build System."
    >
      <PrimaryWorkspace />
      <SecondaryPanel />
    </AppLayout>
  );
};

export default Index;
