import {useHref} from "react-router-dom";
import {buildUrlPathForContentPath} from "../../paths.tsx";
import {removeTrailingSlashes} from "../../util/removeTrailingSlashes.ts";

export type UrlToPath = (url: string) => string[] | null;

// make sure this won't be part of the base URL
const sampleNodePathSegment = "this-is-a-sample";

// converts a URL to a node path
export function useUrlToPath(): UrlToPath {
  const sampleUrl = removeTrailingSlashes(useHref(buildUrlPathForContentPath([sampleNodePathSegment])));
  if (!sampleUrl.endsWith("/" + sampleNodePathSegment)) {
    throw new Error();
  }
  const baseUrl = window.location.origin + sampleUrl.substring(0, sampleUrl.length - sampleNodePathSegment.length);
  return (url: string) => {
    if (!url.startsWith(baseUrl)) {
      return null;
    }
    const suffix = removeTrailingSlashes(url.substring(baseUrl.length));
    return (suffix === "") ? [] : suffix.split("/");
  };
}
