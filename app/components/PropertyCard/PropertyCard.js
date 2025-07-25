'use client';
import Image from 'next/image';
function PropertyCard({ property, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="w-full aspect-[4/3] relative">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover rounded-t-xl"
          unoptimized
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
        </div>
        <p className="text-sm text-gray-600 mt-1">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">{Math.round(property.price / 10)} Cr.</p>
      </div>
    </div>
  );
}
export default PropertyCard;
