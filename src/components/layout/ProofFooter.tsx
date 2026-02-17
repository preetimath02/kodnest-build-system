import { useState } from "react";

const checklistItems = [
  { id: "ui", label: "UI Built" },
  { id: "logic", label: "Logic Working" },
  { id: "test", label: "Test Passed" },
  { id: "deployed", label: "Deployed" },
];

const ProofFooter = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <footer className="border-t border-border bg-card px-4 py-3">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-[13px] font-medium text-muted-foreground tracking-wide uppercase">
          Proof
        </span>
        {checklistItems.map((item) => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className="flex items-center gap-1 text-body text-foreground transition-default hover:text-primary"
          >
            <span
              className={`inline-flex items-center justify-center w-[18px] h-[18px] rounded-sm border transition-default ${
                checked[item.id]
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border bg-background"
              }`}
            >
              {checked[item.id] && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className="text-[14px]">{item.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default ProofFooter;
