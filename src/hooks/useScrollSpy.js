
import { useState, useEffect, useCallback, useRef } from 'react';

const useScrollSpy = (sectionIds, offset = -100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const observerRef = useRef(null);
  const sectionElementsRef = useRef([]);

  const cleanupObserver = useCallback(() => {
    if (observerRef.current) {
      sectionElementsRef.current.forEach((element) => {
        if (element) observerRef.current.unobserve(element);
      });
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    sectionElementsRef.current = [];
  }, []);

  useEffect(() => {
    cleanupObserver();

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    sectionElementsRef.current = elements;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((a, b) => 
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topEntry.target.id);
        }
      },
      { rootMargin: `${offset}px 0px -80% 0px`, threshold: 0.1 }
    );

    elements.forEach((element) => observerRef.current.observe(element));

    return cleanupObserver;
  }, [sectionIds, offset, cleanupObserver]);

  useEffect(() => {
    return () => cleanupObserver();
  }, [cleanupObserver]);

  return activeSection;
};

export default useScrollSpy;