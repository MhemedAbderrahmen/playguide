import { SignInFormValues } from '@/lib/schemas/sign-in';

export const signIn = async (signInDto: SignInFormValues) => {
  const data = signInDto;
  console.log('🚀 ~ signIn ~ data:', data);
  return data;
};
