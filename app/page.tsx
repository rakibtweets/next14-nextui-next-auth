import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-green-400 p-5 dark:bg-orange-400">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}
