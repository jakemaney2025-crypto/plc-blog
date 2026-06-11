export function Footer() {
  const currentYear = new Date().getFullYear();
  const contactEmail = 'Tom_jake2026@outlook.com';

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} PLC Blog. All rights reserved.</p>
          <p className="text-sm mt-2">
            Dedicated to Programmable Logic Controller (PLC) topics and industrial automation.
          </p>
          <div className="mt-4 flex justify-center items-center gap-2">
            <span className="text-sm">Contact:</span>
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
