import { Redirect } from "@/components";

export default async function RedirectPage() {
  return (
    <html>
      <body className="relative flex min-h-screen flex-col bg-secondary-100">
        <Redirect link={"/pt"} />
      </body>
    </html>
  );
}
