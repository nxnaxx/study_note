import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';

type HandlerProps = {
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
};

export default function NewSign() {
  const router = useRouter();
  const [formState, setFormState] = useState({});
  const [addSign] = useMutation(ADD_SIGN, {
    onCompleted() {
      router.push('/');
    },
  });

  const handleInput = ({ e, name }: HandlerProps) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center flexcol mt-20">
      <h1 className="text-3xl mb-10">Sign the Real-World Next.js signbook!</h1>
      <div className="max-w-7xl shadow-xl bg-purple-50 p-7 mb-10 grid grid-rows-1 gap-4 rounded-md border-2 border-purple-800">
        <div>
          <label htmlFor="nickname" className="text-purple-900 mb-2">
            Nickname
          </label>
          <input
            id="nickname"
            type="type"
            onChange={(e) => handleInput({ e, name: 'nickname' })}
            placeholder="Your name"
            className="p-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="content" className="text-purple-900 mb-2">
            Leave a message!
          </label>
          <textarea
            id="content"
            onChange={(e) => handleInput({ e, name: 'content' })}
            placeholder="Leave a message here!"
            className="p-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="country" className="text-purple-900 mb-2">
            If you want, write your country name and its emoji flag
          </label>
          <input
            id="country"
            type="text"
            onChange={(e) => handleInput({ e, name: 'country' })}
            placeholder="Country"
            className="p-2 rounded-lg w-full"
          />
          <button
            className="bg-purple-600 p-4 rounded-lg textgray-50 m-auto mt-4"
            onClick={() => addSign({ variables: formState })}
          >
            Submit
          </button>
        </div>
      </div>
      <Link href={`/`} passHref className="mt-5 underline">
        Back to the homepage
      </Link>
    </div>
  );
}

const ADD_SIGN = gql`
  mutation InsertNewSign(
    $nickname: String!
    $content: String!
    $country: String
  ) {
    insert_sign(
      objects: { nickname: $nickname, country: $country, content: $content }
    ) {
      returning {
        uuid
      }
    }
  }
`;
