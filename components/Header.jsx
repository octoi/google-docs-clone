import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

export default function Header() {
  return (
    <div className="flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
      <Button
        color="grey"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1>Docs</h1>
    </div>
  )
}
