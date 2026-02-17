import { Button } from "@/components/ui/button";

const PrimaryWorkspace = () => {
  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <div className="grid gap-3">
        {/* Demo Card: Typography */}
        <section className="rounded-md border border-border bg-card p-3">
          <h2 className="font-heading text-heading-md">Typography</h2>
          <div className="mt-2 space-y-2 text-prose">
            <h3 className="font-heading text-heading-sm">Heading Small — DM Serif Display</h3>
            <p className="text-body text-muted-foreground">
              Body text at 16px with 1.7 line-height. Clean, readable, never crowded. 
              The system uses Inter for body and DM Serif Display for headings.
            </p>
            <p className="text-body-lg text-foreground">
              Large body text at 18px with 1.8 line-height for emphasis blocks.
            </p>
          </div>
        </section>

        {/* Demo Card: Colors */}
        <section className="rounded-md border border-border bg-card p-3">
          <h2 className="font-heading text-heading-md">Color System</h2>
          <div className="mt-2 flex gap-2 flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-sm bg-background border border-border" />
              <span className="text-[12px] text-muted-foreground">Background</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-sm bg-foreground" />
              <span className="text-[12px] text-muted-foreground">Foreground</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-sm bg-primary" />
              <span className="text-[12px] text-muted-foreground">Primary</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-sm bg-success" />
              <span className="text-[12px] text-muted-foreground">Success</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-sm bg-warning" />
              <span className="text-[12px] text-muted-foreground">Warning</span>
            </div>
          </div>
        </section>

        {/* Demo Card: Buttons */}
        <section className="rounded-md border border-border bg-card p-3">
          <h2 className="font-heading text-heading-md">Buttons</h2>
          <div className="mt-2 flex gap-2 flex-wrap items-center">
            <Button variant="premium">Primary Action</Button>
            <Button variant="premium-outline">Secondary</Button>
            <Button variant="premium-ghost">Ghost</Button>
            <Button variant="premium" size="sm">Small</Button>
            <Button variant="premium" size="lg">Large</Button>
          </div>
        </section>

        {/* Demo Card: Inputs */}
        <section className="rounded-md border border-border bg-card p-3">
          <h2 className="font-heading text-heading-md">Inputs</h2>
          <div className="mt-2 flex flex-col gap-2 max-w-[360px]">
            <label className="text-[14px] font-medium text-foreground">Project Name</label>
            <input
              type="text"
              placeholder="e.g. My SaaS App"
              className="h-[40px] px-2 rounded-md border border-input bg-background text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-default"
            />
            <label className="text-[14px] font-medium text-foreground">Description</label>
            <textarea
              placeholder="Describe your project..."
              rows={3}
              className="px-2 py-1 rounded-md border border-input bg-background text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-default resize-none"
            />
          </div>
        </section>

        {/* Demo Card: States */}
        <section className="rounded-md border border-border bg-card p-3">
          <h2 className="font-heading text-heading-md">States</h2>
          <div className="mt-2 space-y-2">
            <div className="rounded-md border border-destructive/30 bg-destructive/5 p-2">
              <p className="text-[14px] font-medium text-destructive">Build failed</p>
              <p className="text-[13px] text-muted-foreground mt-px">
                The component could not compile. Check for missing imports and try again.
              </p>
            </div>
            <div className="rounded-md border border-border bg-secondary p-2 text-center">
              <p className="text-[14px] text-muted-foreground">No builds yet</p>
              <p className="text-[13px] text-muted-foreground mt-px">
                Start by copying the prompt and building your first component.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Card: Spacing */}
        <section className="rounded-md border border-border bg-card p-3">
          <h2 className="font-heading text-heading-md">Spacing Scale</h2>
          <div className="mt-2 flex items-end gap-2">
            {[
              { label: "8px", size: "w-1 h-1" },
              { label: "16px", size: "w-2 h-2" },
              { label: "24px", size: "w-3 h-3" },
              { label: "40px", size: "w-4 h-4" },
              { label: "64px", size: "w-5 h-5" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div className={`${s.size} rounded-sm bg-primary/20 border border-primary/30`} />
                <span className="text-[11px] text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrimaryWorkspace;
