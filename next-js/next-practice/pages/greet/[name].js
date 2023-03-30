import React from 'react';
import { useRouter } from 'next/router';

export default function Greet() {
  const { query } = useRouter();
  console.log(query);
  return <h1> Hello, {query.name}! </h1>;
}
