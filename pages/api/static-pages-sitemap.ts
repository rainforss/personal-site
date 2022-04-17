import { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";

const siteMapRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    smStream.write({ url: "/", changefreq: "weekly", priority: 0.8 });
    smStream.write({ url: "/about", changefreq: "weekly", priority: 0.8 });
    smStream.write({ url: "/projects", changefreq: "weekly", priority: 0.8 });
    smStream.write({ url: "/blogs", changefreq: "daily", priority: 0.9 });
    smStream.write({ url: "/contact", changefreq: "weekly", priority: 0.8 });

    smStream.end();

    const siteMapOutput = (await streamToPromise(smStream)).toString();

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    res.end(siteMapOutput);
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default siteMapRoute;
