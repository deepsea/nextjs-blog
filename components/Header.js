import Link from 'next/link'
import Nav from '../components/Nav'

export default function Header() {
    return (
        <header>
            <div className="bar text-5xl my-5">
                <Link href="/">Learn NEXT</Link>
            </div>
            <div className="sub-bar"></div>
            <Nav />
        </header>
    )
}
