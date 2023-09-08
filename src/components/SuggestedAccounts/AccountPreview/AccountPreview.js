import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/457aa8bb1f2f9a24881911593e2fa04c.jpeg?x-expires=1693990800&x-signature=kjuDpPJ3qBLWF46xjvzc%2FQhnz%2Fs%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyễn việt toàn</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>đặng thị ngọc mai</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <spa className={cx('label')}>Likes</spa>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
