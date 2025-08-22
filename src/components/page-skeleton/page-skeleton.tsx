export const PageSkeleton = async (props: {
  title: string,
  children: React.ReactNode
}) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col py-20 flex-grow h-full w-full">
      <header className="pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
          <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
            <div className="md:px-0">
              <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-blue-300">
                {title}
              </h1>
            </div>
          </div>
        </div>

      </header>
      <div className="container space-y-8 mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
        {children}
      </div>
    </div>
  );
}
