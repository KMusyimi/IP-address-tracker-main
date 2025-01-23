import {Form, useSearchParams} from "react-router-dom";
import iconArrow from '../../public/images/icon-arrow.svg'
import {useRef, useState} from "react";
import checkValid from "../utils.js";


export default function SearchBar() {
    const inputRef = useRef(null);
    const [, setSearchParams] = useSearchParams();
    const [valid, setValid] = useState(true);

    const invalidStyles = {
        backgroundColor: 'rgb(255, 116, 139)',
        color: 'rgb(247, 44, 91)',
        outline: '2px solid rgb(247, 44, 91)',
        borderRadius: '.85em'
    }


    function handleSubmit(e) {
        e.preventDefault();
        const inputValue = inputRef.current.value.trim();
        const valid = checkValid(inputValue);
        valid ?
            setSearchParams((prevParams) => {
                prevParams.set('search_query', inputValue);
                return prevParams;
            }) : setValid(false);
    }

    return (
        <>
            {!valid && <p className={'err-warning'}
                          style={{color: 'rgb(247, 44, 91)', fontSize: '.885rem', marginBottom: '.35em'}}>Invalid IP
                address or domain...</p>}
            <Form className={'form'}
                  style={!valid ? invalidStyles : {}}
                  onSubmit={handleSubmit} method={'get'}>
                <input
                    id='search-input'
                    className={'search-bar'}
                    type={'search'}
                    name={'search_query'}
                    placeholder={'Search for any IP address or domain'}
                    required={true}
                    ref={inputRef}
                    autoComplete={'on'}
                    onInput={() => !valid && setValid(true)}
                    onClick={() => inputRef.current.focus()}
                />
                <button className={'search-btn'} type={'submit'}>
                    <img src={`${iconArrow}`} alt={'search btn arrow icon'}
                         aria-label={'search bar icon'}/>
                </button>
            </Form>
        </>
    )
}