import SearchBar from "./SearchBar.jsx";

export default function Header() {
    return (
        <header className={'header'}>
            <h1 className={'txt-caps'}>IP address tracker</h1>
            <SearchBar/>
        </header>
    )
}