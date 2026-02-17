import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SecondaryPanelProps {
  stepTitle?: string;
  stepDescription?: string;
  promptText?: string;
}

const SecondaryPanel = ({
  stepTitle = "What to do",
  stepDescription = "Follow the prompt below. Copy it, build it, then confirm the result.",
  promptText = 'Create a responsive landing page with a hero section, feature grid, and footer.',
}: SecondaryPanelProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <aside className="border-l border-border bg-card p-3 flex flex-col gap-3">
      <div>
        <h3 className="font-heading text-heading-sm">{stepTitle}</h3>
        <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">
          {stepDescription}
        </p>
      </div>

      <div className="rounded-md border border-border bg-background p-2">
        <pre className="text-[13px] text-foreground leading-relaxed whitespace-pre-wrap font-body">
          {promptText}
        </pre>
      </div>

      <div className="flex flex-col gap-1">
        <Button variant="premium" size="default" onClick={handleCopy}>
          {copied ? "Copied" : "Copy Prompt"}
        </Button>
        <Button variant="premium-outline" size="default">
          Build in Lovable
        </Button>
      </div>

      <div className="mt-auto flex flex-col gap-1">
        <Button variant="premium-ghost" size="sm">
          ✓ It Worked
        </Button>
        <Button variant="premium-ghost" size="sm">
          ✕ Error
        </Button>
        <Button variant="premium-ghost" size="sm">
          📎 Add Screenshot
        </Button>
      </div>
    </aside>
  );
};

export default SecondaryPanel;
