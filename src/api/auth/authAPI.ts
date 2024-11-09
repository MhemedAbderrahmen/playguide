import { SignInFormValues, TwitchAuthResponse } from '@/lib/schemas/sign-in';
import { AxiosResponse } from 'axios';
import twitchAxiosInstance from '../twitch-instance';

export const signIn = async (signInDto: SignInFormValues) => {
  const data = signInDto;
  return data;
};

export const twitchAuth = async (): Promise<
  AxiosResponse<TwitchAuthResponse>
> => {
  return await twitchAxiosInstance.post(
    `/token?client_id=${import.meta.env.VITE_API_TWITCH_CLIENT_ID}&client_secret=${import.meta.env.VITE_API_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
  );
};
