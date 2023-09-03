import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Layout/Poppers';
import { useDebounce } from '~/hooks';

// icon
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';

// hooks
import { useEffect, useRef, useState } from 'react';

// thư viện Axios dùng để gọi API
import * as searchServices from '~/apiServices/searchServices';
const cx = classNames.bind(styles);

function Search() {
    // chưa thông tin nhập input
    const [searchValue, setSearchValue] = useState('');

    // chưa thông tin nhập input
    const [searchResult, setSearchResult] = useState([]);

    // có đang focus thẻ input hay không hoặc boler ra ngoài hay không
    const [showResult, setShowResult] = useState(true);

    // loading quay quay

    const [loading, setLoading] = useState(false);

    // fix gửi nhiều api cùng 1 lúc
    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        // encodeURIComponent mã hóa thành url để tránh nhập query key=value vd như &?
        // request sẽ nói chuổi của API
        // cấu hình Api gửi dữ liệu và nhận dữ liệu
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);

            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

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

    // bắt sự kiện ko nhập dấu cách đầu

    const handleValue = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ') && !searchValue.trim()) {
            return;
        }
        setSearchValue(searchValue);
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
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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
                    onChange={handleValue}
                    onFocus={() => setShowResult(true)}
                />
                {/* nghĩa là khi có searchVlaue thì nó ms hiện icon */}
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
