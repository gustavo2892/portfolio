type ProjectGridCardProps = {
  children: React.ReactNode;
};

export const ProjectGridCard = ({ children }: ProjectGridCardProps) => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};