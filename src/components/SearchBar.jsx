import {Form, useSearchParams} from "react-router-dom";
import iconArrow from '../../images/icon-arrow.svg'
import {useEffect, useRef, useState} from "react";


export default function SearchBar() {
    const inputRef = useRef(null);
    const [messageParam, setMessageParam] = useSearchParams();
    const [valid, setValid] = useState(true);
    const message = messageParam.get('message');
    const invalidStyles = {
        backgroundColor: 'rgb(255, 116, 139)',
        color: 'rgb(247, 44, 91)',
        outline: '2px solid rgb(247, 44, 91)',
        borderRadius: '.85em'
    }
    useEffect(() => {
        message && setValid(false);
    }, [message])
    return (
        <>
            {!valid && <p className={'err-warning'}
                          style={{color: 'rgb(247, 44, 91)', fontSize: '.885rem', marginBottom: '.35em'}}>{message}</p>}
            <Form className={'form'}
                  style={!valid ? invalidStyles : {}}
                  method={'get'}>
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