export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {currentYear} Surfer Kim. All rights reserved.</p>
      </div>
    </footer>
  )
}       