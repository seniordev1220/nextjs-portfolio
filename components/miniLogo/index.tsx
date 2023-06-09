import * as React from "react";

import { joinClass } from "../../helpers/utils";

import classes from "./styles.module.scss";

export const MiniLogo = ({ className }: { className?: string }) => (
  <svg
    className={joinClass(classes.svg, className ? className : "")}
    viewBox="77.734 155.297 153.826 159.405"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="linear" x1="0%" y1="0%" x2="120%" y2="120%">
        <stop offset="0%" stopColor={"#353839"} />
        <stop offset="16.5%" stopColor={"#353839"} />

        <stop offset="33%" stopColor={"#2753d7"} />
        <stop offset="49.5%" stopColor={"#2753d7"} />
        <stop offset="66%" stopColor={"#353839"} />
        <stop offset="72.5%" stopColor={"#353839"} />

        <animateTransform
          attributeName="gradientTransform"
          type="translate"
          from="-1 0"
          to="1.3 0"
          begin="0s"
          dur="5s"
          repeatCount={"indefinite"}
        />
      </linearGradient>
    </defs>
    <g
      data-paper-data='{"isIcon":"true","iconType":"icon","rawIconId":"22d29742-b42c-4755-b76a-598525861e80","selectedEffects":{"container":"","transformation":"","pattern":""},"combineTerms":"undefined","isDetailed":false,"fillRule":"nonzero","bounds":{"x":77.73408531211987,"y":155.2974037625368,"width":153.82601073830392,"height":159.4051924749264},"iconStyle":"standalone","suitableAsStandaloneIcon":true}'
      style={{
        fill: "#008eaa",
      }}
    >
      <path
        d="m144.206 245.043 10.361-21.52 29.81 61.53h-46.388l-14.187 29.65H231.56l-76.993-159.406-76.833 159.406h32.838z"
        data-paper-data='{"isPathIcon":true}'
        style={{
          fill: "url(#linear)",
        }}
      />
    </g>
  </svg>
);

export default MiniLogo;
