import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Poppers';

// import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';

import AccountPreview from '~/components/SuggestedAccounts/AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <HeadlessTippy
                // visible
                interactive
                delay={[800, 0]}
                // chỉnh vị trí tọa độ tippy
                offset={[-12, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/457aa8bb1f2f9a24881911593e2fa04c.jpeg?x-expires=1693990800&x-signature=kjuDpPJ3qBLWF46xjvzc%2FQhnz%2Fs%3D"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyễn việt toàn</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>đặng thị ngọc mai</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
