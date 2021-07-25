import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/dist/client/router';

export default function DocumentRow({ id, fileName, timestamp }) {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/doc/${id}`);
  }

  return (
    <div onClick={handleRoute} className="flex items-center p-4 rounded-lg hover:bg-gray-100 cursor-pointer text-sm text-gray-700">
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{timestamp?.toDate().toLocaleDateString()}</p>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="border-0"
      >
        <Icon name="more_vert" size="3xl" />
      </Button>
    </div>
  )
}
