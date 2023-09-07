import Menu from './Menu';
// hổ trợ chuyển màu Link
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
    return (
        // custom active khi có khi không
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
};

export default MenuItem;
