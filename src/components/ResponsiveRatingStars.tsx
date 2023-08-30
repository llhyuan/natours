"use client";
import { useRef, useState } from "react";
export default function ResponsiveRatingStars() {
  const [starHovered, setStarHovered] = useState(0);
  const starsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex w-fit"
      onPointerLeave={() => {
        setStarHovered(0);
      }}
    >
      <svg
        id="1"
        className={
          "w-6 h-6 mr-1 " +
          (!(starHovered < 1) ? "text-yellow-300" : "text-zinc-400")
        }
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        onPointerOver={(e) => {
          setStarHovered(parseInt(e.currentTarget.id));
        }}
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        id="2"
        className={
          "w-6 h-6 mr-1 " +
          (!(starHovered < 2) ? "text-yellow-300" : "text-zinc-400")
        }
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        onPointerOver={(e) => {
          setStarHovered(parseInt(e.currentTarget.id));
        }}
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        id="3"
        className={
          "w-6 h-6 mr-1 " +
          (!(starHovered < 3) ? "text-yellow-300" : "text-zinc-400")
        }
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        onPointerOver={(e) => {
          setStarHovered(parseInt(e.currentTarget.id));
        }}
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        id="4"
        className={
          "w-6 h-6 mr-1 " +
          (!(starHovered < 4) ? "text-yellow-300" : "text-zinc-400")
        }
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        onPointerOver={(e) => {
          setStarHovered(parseInt(e.currentTarget.id));
        }}
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        id="5"
        className={
          "w-6 h-6 mr-1 " +
          (!(starHovered < 5) ? "text-yellow-300" : "text-zinc-400")
        }
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        onPointerOver={(e) => {
          setStarHovered(parseInt(e.currentTarget.id));
        }}
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
}
