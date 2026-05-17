export default function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-border py-8 mt-auto bg-white">
      <div className="container mx-auto px-4 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Taito Amemiya. All rights reserved.</p>
      </div>
    </footer>
  )
}
