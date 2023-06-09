import Link from "next/link";

import classes from "./button.module.css";

function Button({ onClick, href, children }: ButtonPropType) {
  if (href) {
    return (
      <Link className={classes.btn} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
interface ButtonPropType {
  href?: string;
  children: string;
  /* eslint-disable */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => {};
}

export default Button;
