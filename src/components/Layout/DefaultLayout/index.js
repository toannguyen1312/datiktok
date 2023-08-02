// di chuyển giữa các trang vẫn giữ nguyên
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

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

export default DefauleLayout;
