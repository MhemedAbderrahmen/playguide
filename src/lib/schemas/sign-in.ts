export type SignInFormValues = {
  email: string;
  password: string;
};

export type TwitchAuthResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type GetGamesResponse = {};
