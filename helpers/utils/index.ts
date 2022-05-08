import { Maybe } from "../../types";

export const joinClass = (...classNames: Maybe<boolean | string>[]): string =>
    classNames
        .filter((className: string) => !!className)
        .map((className: string) => className)
        .join(" ");
