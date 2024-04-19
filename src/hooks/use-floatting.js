import { useEffect, useLayoutEffect } from "react";
import {
  flip,
  offset,
  useFloating as useFloatingHook,
} from "@floating-ui/react-dom";
import useOnClickOutside from "./useOnClickOutside";

export default function useFloating(placement, offsetValue = 0) {
  const [show, setShow, ref] = useOnClickOutside();

  const { x, y, reference, floating, strategy, update, refs } = useFloatingHook(
    {
      placement,
      middleware: [flip(), offset(offsetValue)],
    }
  );

  useEffect(() => {
    if (!show || !refs.floating.current || !refs.reference.current) {
      return () => {};
    }
  }, [refs.floating, refs.reference, show, update]);

  useLayoutEffect(() => {
    if (!show || !ref.current) {
      return () => {};
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (!isIntersecting) {
          setShow(false);
        }
      });
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, show, setShow]);

  return {
    x,
    y,
    reference,
    floating,
    strategy,
    ref,
    show,
    setShow,
  };
}
