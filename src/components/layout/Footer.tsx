export default function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Taito Amemiya. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with Next.js & Tailwind CSS. Hosted on GitHub Pages.</p>
      </div>
    </footer>
  )
}
