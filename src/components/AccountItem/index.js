import classNames from 'classnames/bind';

// kiểm tra kiểu dữ liệu của props components
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avartar')} src={data.avatar} alt={data.full_name}></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
