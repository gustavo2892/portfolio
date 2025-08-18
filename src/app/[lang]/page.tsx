import { Locale } from "../../../i18n-config";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  console.log((await props.params).lang)

  return (
    <div className="mt-20 text-white"/>
  );
}
