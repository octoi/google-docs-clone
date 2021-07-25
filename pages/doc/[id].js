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

        <div>
          <h2 className="flex-grow px-2">{snapshot?.data()?.fileName}</h2>
        </div>
      </header>
    </div>
  )
}
