import Image from "next/image";

// components/Card.js
const Card = ({ title, description, price, imageUrl }) => {
  return (
    <div className="border bg-yellow-900 border-gray-300 rounded-lg shadow-md m-4 overflow-hidden w-72">
      {imageUrl && (
        <div className="w-full h-auto">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
      )}
      <div className="p-4 font-mono">
        <h3 className="text-xl font-semibold mb-2 font-mono">{title}</h3>
        <p className="text-gray-500 font-mono">{description}</p>
        <a
          href="#price"
          className="hover:underline mb-6 hover:text-red-400 text-lg font-semibold text-red-900 mb-2 font-mono"
        >
          {price}
        </a>
      </div>
    </div>
  );
};
export default Card;
