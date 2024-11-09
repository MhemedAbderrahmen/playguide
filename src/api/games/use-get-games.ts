import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { getGames } from './gamesAPI';

export const useGetGames = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.GAMES.GET_GAMES],
    mutationFn: () => getGames(),
  });
};
