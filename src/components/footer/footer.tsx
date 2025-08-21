import { Social } from './components';

export const Footer = () => {
  return (
    <footer className="bg-secondary-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center py-8">
          <Social />
        </div>
      </div>
    </footer>
  );
};