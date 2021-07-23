import Head from 'next/head';
import Image from 'next/image';
import Button from '@material-tailwind/react/Button';
import { signIn } from 'next-auth/client';

export default function Login() {
  return (
    <section>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <Image
          src="https://links.papareact.com/1ui"
          width="300"
          height="550"
          objectFit="contain"
        />
      </div>
    </section>
  )
}

