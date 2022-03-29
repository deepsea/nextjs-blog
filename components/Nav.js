import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="flex space-x-4 py-3 text-3xl font-medium transition-color red">
            <Link href="/blog">
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">
                    Blog
                </a>
            </Link>
            <Link href="/about/career">
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">
                    Career
                </a>
            </Link>
            <Link href="/about">
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">
                    About
                </a>
            </Link>
            <Link href="/contact">
                <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">
                    Contact
                </a>
            </Link>
        </nav>
    )
}
