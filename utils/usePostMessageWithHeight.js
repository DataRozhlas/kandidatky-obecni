import React from "react";
import { debounce } from "lodash";

const usePostMessageWithHeight = id => {
  const containerRef = React.useRef(null);

  const postHeightMessage = React.useCallback(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      if (window.parent) {
        window.parent.postMessage(
          {
            "cro-embed-height": {
              [id]: height,
            },
          },
          "*"
        );
      }
    }
  }, [id]);

  const onResize = React.useCallback(
    debounce(() => {
      postHeightMessage();
      setTimeout(() => postHeightMessage(), 300);
      setTimeout(() => postHeightMessage(), 1000);
      setTimeout(() => postHeightMessage(), 5000);
    }, 50),
    [postHeightMessage]
  );

  React.useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return {
    containerRef,
    postHeightMessage,
  };
};

export default usePostMessageWithHeight;
