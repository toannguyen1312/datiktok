import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avartar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b4bdd4a97d253f9943835bed98f2ce17~c5_100x100.jpeg?x-expires=1691510400&x-signature=uFCT7%2Bja5a%2FXTAn%2BEH10vDGO%2Fzw%3D"
                alt="tên"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyễn việt toàn</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}></span>
            </div>
        </div>
    );
}

export default AccountItem;
