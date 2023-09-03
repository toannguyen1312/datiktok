// đưa cấu hình ra ngoài
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

// routes config
import config from '~/config/routes';
// Layouts
import { HeaderOnly } from '~/components/Layout';

// không cần đăng nhập vẫn thấy đc
const publicRoutes = [
    {
        path: config.home,
        component: Home,
    },

    {
        path: config.following,
        component: Following,
    },

    {
        path: config.profile,
        component: Profile,
    },

    {
        path: config.upload,
        component: Upload,
        layout: HeaderOnly,
    },

    // {
    //     path: '/search',
    //     component: Search,
    //     layout: null,
    // },
];

// phải đăng nhập ms thấy được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
