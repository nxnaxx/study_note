import * as C from './chance';
import * as Img from './image';

export type UserProps = {
  uuid: string;
  name: string;
  jobTitle: string;
  email: string;
  avatar: string;
};

export const makeUser = (
  uuid: string,
  name: string,
  jobTitle: string,
  email: string,
  avatar: string,
): UserProps => ({
  uuid,
  name,
  jobTitle,
  email,
  avatar,
});

export const makeRandomUser = (): UserProps =>
  makeUser(
    C.randomUUID(),
    C.randomName(),
    C.randomJobTitle(),
    C.randomEmail(),
    Img.randomAvatar(),
  );
