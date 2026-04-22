"use client";

import Link from "next/link";

type Props = {
  message?: string;
};

export function FloatingWhatsApp({
  message = "Hello",
}: Props) {
  // Example UK number (replace with your own if needed)
  const phoneNumber = "+442045785564"; // UK format without +
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={url}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:bg-green-600"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
      >
        <path d="M16 .4C7.4.4.5 7.3.5 15.9c0 2.8.7 5.5 2.1 7.9L.4 31.6l8-2.1c2.3 1.2 4.8 1.8 7.4 1.8 8.6 0 15.5-6.9 15.5-15.5S24.6.4 16 .4zm0 28.3c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.7 1.2 1.2-4.6-.3-.5c-1.3-2.1-2-4.5-2-6.9 0-7.3 6-13.3 13.3-13.3S29.3 8.6 29.3 16 23.3 28.7 16 28.7zm7.3-9.8c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.5-.2.2-.4.3-.8.1-2.4-1.2-3.9-2.1-5.5-4.7-.4-.6.4-.6 1.1-2 .1-.2.1-.5 0-.7-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.3 5.6.9.4 1.6.7 2.2.9.9.3 1.7.3 2.3.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </Link>
  );
}