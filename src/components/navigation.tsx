import { useTwitchAuthorization } from '@/api/auth/useAuthQuery';
import { useGetGames } from '@/api/games/use-get-games';
import { Link } from '@tanstack/react-router';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

export const Navigation = () => {
  const { mutateAsync } = useTwitchAuthorization();
  const { mutateAsync: getGames} = useGetGames();
  
  const handleClick = () => {
    getGames();
  }

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
        <div className='flex flex-row items-center space-x-2'>
          <ModeToggle />
          <Button onClick={()=>handleClick()}>
            Sign In
          </Button>
        </div>
    </div>
  );
};
