import Image, { StaticImageData } from "next/image";

const Tile = ({ src }: { src: StaticImageData }) => {
  return (
    <Image
      width={200}
      height={200}
      placeholder="blur"
      src={src}
      alt="Keegan Donley"
      className="hover:scale-110 hover:shadow-lg rounded-lg transition-all"
    />
  );
};

export default Tile;
