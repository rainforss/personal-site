import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { pageLoad } from "./PageControl";

interface ILogoProps {}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
    <motion.div
      variants={pageLoad}
      initial={{ transform: "translateX(-100%)", opacity: 0 }}
      animate="enterFromLeft"
      exit="exitToLeft"
      className="h-40 w-64 absolute top-6 -left-4 z-20"
    >
      <Link href="/" passHref>
        <a>
          <Image src="/rainforss.svg" alt="Logo" width={200} height={120} />
        </a>
      </Link>
    </motion.div>
  );
};

export default Logo;
