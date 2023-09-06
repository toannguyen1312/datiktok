import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Poppers';

import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

// kiểm tre kiểu dữ liệu props elements
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

// cách giải quyết tạm thời nếu ko chuyền onchange từ ngoài vào
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // convert sang boolean nếu có children sẽ trả về true
            const isParent = !!item.children;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    // reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            // dùng để secletor nội dụng bên trong
            interactive
            // vị trí
            offset={[12, 8]}
            // dùng để ẩn hiện tippy
            // visible={true}
            delay={[0, 700]}
            // bỏ hành vi click vào avatar ảnh tippy

            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            // được gọi khi bắt đầu ẩn
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.protoTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
