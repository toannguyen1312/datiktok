// di chuyển giữa các trang vẫn giữ nguyên
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';

// kiểm tra kiểu dữ liệu props elements
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefauleLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {/* mõi lần phải thay đổi */}
                    {children}
                </div>
            </div>
        </div>
    );
}

DefauleLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefauleLayout;
