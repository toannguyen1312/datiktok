// đưa cấu hình ra ngoài
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';

// routes config
import config from '~/config';
// Layouts
import { HeaderOnly } from '~/layouts';

// không cần đăng nhập vẫn thấy đc
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.following,
        component: Following,
    },

    {
        path: config.routes.profile,
        component: Profile,
    },

    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },

    {
        path: config.routes.live,
        component: Live,
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
