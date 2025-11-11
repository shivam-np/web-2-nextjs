import { NavLink } from "@/components/ui/NavLink";

export default function NotFound() {
  return (
    <main className="pt-10 px-4 min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-green-700">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <NavLink
        href="/"
        className=" inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors duration-300"
      >
        Go to Homepage
      </NavLink>
    </main>
  );
}
