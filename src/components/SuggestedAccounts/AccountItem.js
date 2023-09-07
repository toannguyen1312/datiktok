import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';

// import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
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
    );
}

AccountItem.propTypes = {};

export default AccountItem;
