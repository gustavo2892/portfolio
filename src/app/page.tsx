import { Redirect } from '@/components';

export default async function RedirectPage() {
  return (
    <html>
      <body className="relative flex min-h-screen flex-col bg-gray-700">
        <Redirect link={'/pt'}/>
      </body>
    </html>
  );
}