import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-primary-50/30 via-white to-white">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-primary-950 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-600/20"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
