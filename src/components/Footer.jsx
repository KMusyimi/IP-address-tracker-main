import {Link} from "react-router-dom";

export default function Footer() {
    return (<footer className={'footer'}>@2025 My Github<Link to={'https://github.com/KMusyimi'}
                                                              target={'_blank'}> KMusyimi </Link>
        Frontend Mentor <Link to={'https://www.frontendmentor.io/home'} target={'_blank'}>frontendmentor.io</Link>
    </footer>)
}