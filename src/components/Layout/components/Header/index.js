// scss
import styles from './Header.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Layout/Poppers';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Layout/Poppers/Menu';

// thư viện tippy
// import Tippy from '@tippyjs/react';
// bậc ra thư viện tìm kiếm
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

// css thư viện tippy
import 'tippy.js/dist/tippy.css';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faMagnifyingGlass,
    faCircleXmark,
    faSignIn,
    faEllipsisVertical,
    faEarthAmericas,
    faKeyboard,
    faCloudArrowUp,
    faUser,
    faCoins,
    faGear,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

// hooks
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',

        // lớp con
        children: {
            title: 'Language',
            data: [
                // chứa nhiều ngôn ngữ
                {
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoa',
    },

    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },

    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },

    ...MENU_ITEMS,

    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        to: '/settings',
        // thằng nào có cái này sẽ có vạch
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* header logo tiktok */}
                <div className={cx('logo')}>
                    <img src={images.logo} />
                </div>

                {/* header input */}
                <HeadlessTippy
                    // dùng để secletor nội dụng bên trong
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <em className={cx('search-title')}>Accounts</em>

                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    {/* header search input */}
                    <div className={cx('search')}>
                        <input placeholder="Search accouts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                {/* backgroud đăng nhập hoặc chưa đăng nhập  */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                alt="nguyễn việt toàn"
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b4bdd4a97d253f9943835bed98f2ce17~c5_100x100.jpeg?x-expires=1692597600&x-signature=Ahp4d%2Frwagwqus4LUdkgWBroMls%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
