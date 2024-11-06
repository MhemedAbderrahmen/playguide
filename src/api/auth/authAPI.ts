import { SignInFormValues } from '@/lib/schemas/sign-in';

export const signIn = async (signInDto: SignInFormValues) => {
  const data = signInDto;
  console.log('🚀 ~ signIn ~ data:', data);
  return data;
};

export const twitchAuth = async () => {
  console.log('🚀 ~ twitchAuth ~ data:', {
    twitchClientId: import.meta.env.VITE_API_TWITCH_CLIENT_ID,
    twitchClientSecret: import.meta.env.VITE_API_TWITCH_CLIENT_SECRET,
  });
};
