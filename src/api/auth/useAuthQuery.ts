import { SignInFormValues } from '@/lib/schemas/sign-in';
import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { signIn, twitchAuth } from './authAPI';

export const useSignIn = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.SIGN_IN],
    mutationFn: (signInFormValues: SignInFormValues) =>
      signIn(signInFormValues),
  });
};

export const useTwitchAuthorization = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.TWITCH_AUTH],
    mutationFn: () => twitchAuth(),
  });
};