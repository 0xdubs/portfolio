import { NextPage } from "next";
import Giscus from "@giscus/react";
import { NextSeo } from "next-seo";
import { useLinkColor } from "components/theme";

const GuestBookPage: NextPage = () => {
    const linkColor = useLinkColor();
  return (
    <>
      <NextSeo
        title="Guestbook | Anish De"
        description="Leave messages on my portfolio site's guestbook :)"
      />
      <h1 className="text-3xl font-bold">GuestBook</h1>
      <p className="mt-4 text-gray-300">Leave a message :)</p>
      <div className="mt-16">
        <Giscus
          id="comments"
          repo="danielw1534/portfolio"
          repoId="R_kgDOHyNK8A"
          category="General"
          categoryId="DIC_kwDOHyNK8M4CQr5d"
          mapping="specific"
          term="GuestBook"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={linkColor==="accent.400"?"dark":"light"}
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default GuestBookPage;