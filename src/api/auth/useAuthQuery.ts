import { SignInFormValues } from '@/lib/schemas/sign-in';
import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { signIn } from './authAPI';

export const useSignIn = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.SIGN_IN],
    mutationFn: (signInFormValues: SignInFormValues) =>
      signIn(signInFormValues),
  });
};
