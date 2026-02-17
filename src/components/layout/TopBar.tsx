interface TopBarProps {
  projectName?: string;
  currentStep?: number;
  totalSteps?: number;
  status?: "not-started" | "in-progress" | "shipped";
}

const statusLabels: Record<string, string> = {
  "not-started": "Not Started",
  "in-progress": "In Progress",
  "shipped": "Shipped",
};

const statusStyles: Record<string, string> = {
  "not-started": "bg-secondary text-secondary-foreground",
  "in-progress": "bg-warning text-warning-foreground",
  "shipped": "bg-success text-success-foreground",
};

const TopBar = ({
  projectName = "KodNest Premium",
  currentStep = 1,
  totalSteps = 6,
  status = "not-started",
}: TopBarProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-card">
      <span className="font-heading text-heading-sm text-foreground">{projectName}</span>

      <span className="text-body text-muted-foreground font-medium">
        Step {currentStep} / {totalSteps}
      </span>

      <span
        className={`inline-flex items-center px-2 py-1 rounded-sm text-[13px] font-medium tracking-wide ${statusStyles[status]}`}
      >
        {statusLabels[status]}
      </span>
    </header>
  );
};

export default TopBar;
