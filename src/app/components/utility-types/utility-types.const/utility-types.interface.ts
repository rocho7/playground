export interface IUser {
  createdAt: Date;
  updateAt: Date;
  name: string;
  lastName?: string;
}

export type UserRequired = Required<IUser>;
export type UserPartial = Readonly<Partial<IUser>>;
export type UserOmit = Omit<IUser, 'createdAt'>;
export type UserUptadePartial = Pick<IUser, 'name' | 'lastName'>
export type UserGroup = Record<string, IUser[]>;
