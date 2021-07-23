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
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image
          src="https://links.papareact.com/1ui"
          width="550"
          height="300"
          objectFit="contain"
        />
        <Button
          className="w-44 mt-10"
          color="blue"
          buttonType="filled"
          ripple="light"
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </section>
  )
}

