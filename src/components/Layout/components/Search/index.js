import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Layout/Poppers';

// icon
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';

// hooks
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    // có đang focus thẻ input hay không hoặc boler ra ngoài hay không
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue(' ');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const inputRef = useRef();
    // sử lí ẩn kq
    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            // dùng để secletor nội dụng bên trong
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <em className={cx('search-title')}>Accounts</em>

                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            // có nghĩ là bấm ra ngoài tippy
            onClickOutside={handleHideResult}
        >
            {/* header search input */}
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accouts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {/* nghĩa là khi có searchVlaue thì nó ms hiện icon */}
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
