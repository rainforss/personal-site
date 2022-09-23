import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          id="d365-tracking"
          dangerouslySetInnerHTML={{
            __html: `<div id="dChSPZufhxuKY7ZVuvGwVVm5t7r3_UptQ-FbsB_LJvis"></div><script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007"></script><div class="d365-mkt-config" style="display:none" data-website-id="ChSPZufhxuKY7ZVuvGwVVm5t7r3_UptQ-FbsB_LJvis" data-hostname="53b5d92930b045c68a07d11ed0e50c9c.svc.dynamics.com"></div>`,
          }}
        />
        <script
          id="d365-form-tracking"
          dangerouslySetInnerHTML={{
            __html: `<script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script> <div class="d365-mkt-config" style="display:none" data-website-id="ChSPZufhxuKY7ZVuvGwVVm5t7r3_UptQ-FbsB_LJvis" data-hostname="53b5d92930b045c68a07d11ed0e50c9c.svc.dynamics.com"> </div>`,
          }}
        />
      </body>
    </Html>
  );
};

export default MyDocument;
