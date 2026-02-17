interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-3 py-5">
      <h1 className="font-heading text-heading-xl text-foreground mb-2">
        {title}
      </h1>
      <p className="text-body text-muted-foreground text-center text-prose">
        This section will be built in the next step.
      </p>
    </div>
  );
};

export default PlaceholderPage;
