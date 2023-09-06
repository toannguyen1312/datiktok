import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

// kiểm tra kiểu dữ liệu props emlements
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}> {children}</div>;
}

Wrapper.protoTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
