import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

// kiểm tra kiểu dữ liệu props elment
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItems;
