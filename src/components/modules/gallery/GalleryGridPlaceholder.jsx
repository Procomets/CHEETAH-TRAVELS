import React, { useEffect, useRef } from 'react';
import { galleryData } from '../../../data/galleryData';
import '../../../styles/index.css'; // ensure bento classes are available

export const GalleryGridPlaceholder = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bento-visible');
            // Stop observing once visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the item is visible
      }
    );

    const items = containerRef.current.querySelectorAll('.bento-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div>
      {/* Bento Grid */}
      <div className="bento-grid" ref={containerRef}>
        {galleryData.map((item) => {
          return (
            <div key={item.id} className={`bento-item ${item.spanClass}`}>
              <img src={item.image} alt={item.title} className="bento-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
