import { useEffect } from "react";

export const useScroll = (handler: (event: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (e: Event) => {
      handler(e as MouseEvent);
    };
    document.addEventListener("scroll", listener);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [handler]);
};
