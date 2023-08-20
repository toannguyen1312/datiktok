import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Layout/Poppers';

import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

// cách giải quyết tạm thời nếu ko chuyền onchange từ ngoài vào
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
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
    return (
        <Tippy
            // dùng để secletor nội dụng bên trong
            interactive
            // vị trí
            offset={[12, 8]}
            // dùng để ẩn hiện tippy
            // visible
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            // được gọi khi bắt đầu ẩn
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
