import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
// import Menu from './Menu';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
// icon
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiceIcon,
    LiveActiveIcon,
} from '~/components/Icons';

// import acounts
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiceIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts lable="Suggested accounts" />

            <p className={cx('more-btn')}>See all</p>
        </aside>
    );
}

export default Sidebar;
