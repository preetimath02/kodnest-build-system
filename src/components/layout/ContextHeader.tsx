interface ContextHeaderProps {
  headline: string;
  subtext: string;
}

const ContextHeader = ({ headline, subtext }: ContextHeaderProps) => {
  return (
    <section className="px-4 pt-4 pb-3">
      <h1 className="font-heading text-heading-lg text-foreground">{headline}</h1>
      <p className="mt-1 text-body text-muted-foreground text-prose">{subtext}</p>
    </section>
  );
};

export default ContextHeader;
