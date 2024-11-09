import { GetGamesResponse } from '@/lib/schemas/sign-in';
import { AxiosResponse } from 'axios';
import { igdbAxiosInstance } from '../axios-instance';

export const getGames = async (): Promise<AxiosResponse<GetGamesResponse>> => {
  return await igdbAxiosInstance.post(`/games`);
};
