import Header from '../components/Header'

export default function Page({ children }) {
    return (
        <div className="container mx-auto px-4">
            <Header />
            {children}
        </div>
    )
}
