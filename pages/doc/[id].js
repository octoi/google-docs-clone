import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { db } from '../../firebase/firebase';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { getSession, signOut, useSession } from 'next-auth/client';
import Login from '../../components/Login';

export default function doc() {
  const router = useRouter();
  const { id } = router.query;

  const [session] = useSession();

  const document = db.collection("userDoc").doc(session?.user?.email).collection("docs").doc(id);
  const [snapshot, loadingSnapshot] = useDocumentOnce(document);

  if (!session) return <Login />

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span className="cursor-pointer" onClick={() => router.push("/")}>
          <Icon name="description" size="5xl" color="blue" />
        </span>

        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>

        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          rounded={false}
          iconOnly={false}
          block={false}
          ripple="light"
          className="hidden md:inline-flex h-10"
        >
          <Icon name="people" size="3xl" />
          SHARE
        </Button>

        <img
          loading="lazy"
          className="cursor-pointer h-12 w-12 rounded-full ml-2"
          onClick={signOut}
          src={session?.user?.image}
          alt=""
        />
      </header>
    </div>
  )
}
