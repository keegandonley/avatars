"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

const Tile = ({ src }: { src: StaticImageData }) => {
  const elem = useRef(null);
  useEffect(() => {
    if (elem.current) {
      const observer = new IntersectionObserver(
        ([e]) =>
          e.intersectionRatio < 0.75
            ? e.target.classList.add("stuck")
            : e.target.classList.remove("stuck"),
        { threshold: [0.75] }
      );

      observer.observe(elem.current);

      return () => {
        if (elem.current) {
          observer.unobserve(elem.current);
        }
      };
    }
  }, []);
  return (
    <Image
      width={200}
      height={200}
      placeholder="blur"
      src={src}
      alt="Keegan Donley"
      className="hover:scale-110 hover:shadow-lg rounded-lg transition-all timei sticky image-tile duration-1000"
      ref={elem}
    />
  );
};

export default Tile;
