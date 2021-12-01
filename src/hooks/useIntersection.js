import { useEffect } from "react";

let listenerCallbacks = new WeakMap();

let observer;

function handleIntersection(entries) {
  entries.forEach((entry) => {
    let cb = listenerCallbacks.get(entry.target);

    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      observer.unobserve(entry.target);
      listenerCallbacks.delete(entry.target);
      cb();
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "100px",
      threshold: "0.15",
    });
  }

  return observer;
}

export default function useIntersection(elem, callback) {
  useEffect(() => {
    console.log("CALLED");
    let target = elem.current;
    let observer = getIntersectionObserver();
    listenerCallbacks.set(target, callback);
    observer.observe(target);
    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
