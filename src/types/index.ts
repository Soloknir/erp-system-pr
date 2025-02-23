export interface IUser {
  id: string;
  tabel: string;
  username: string;
}

export interface ILoginDto {
  tabel: string;
  username: string;
  password: string;
}

export interface ILoginOptions {
  remember?: boolean,
  callback?: () => void
}
