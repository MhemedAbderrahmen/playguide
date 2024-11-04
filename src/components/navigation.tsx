import { Link } from '@tanstack/react-router';
import { ModeToggle } from './mode-toggle';

export const Navigation = () => {
  return (
    <div className='w-full gap-4 flex justify-between'>
        <div className="flex flex-row space-x-8">
          <div className='font-semibold text-xl'>
            PlayGuide
          </div>
          <div className="flex flex-row w-full gap-4">
            <Link to="/" className="[&.active]:underline">
                Home
            </Link>
            <Link to="/about" className="[&.active]:underline">
                About
            </Link>
          </div>
        </div>
        <ModeToggle />
    </div>
  );
};
