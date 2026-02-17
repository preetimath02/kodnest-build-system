import TopBar from "./TopBar";
import ContextHeader from "./ContextHeader";
import ProofFooter from "./ProofFooter";

interface AppLayoutProps {
  projectName?: string;
  currentStep?: number;
  totalSteps?: number;
  status?: "not-started" | "in-progress" | "shipped";
  headline: string;
  subtext: string;
  children: React.ReactNode;
}

const AppLayout = ({
  projectName,
  currentStep,
  totalSteps,
  status,
  headline,
  subtext,
  children,
}: AppLayoutProps) => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <TopBar
        projectName={projectName}
        currentStep={currentStep}
        totalSteps={totalSteps}
        status={status}
      />
      <ContextHeader headline={headline} subtext={subtext} />
      <div className="flex-1 flex min-h-0">{children}</div>
      <ProofFooter />
    </div>
  );
};

export default AppLayout;
