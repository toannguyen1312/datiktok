// đưa cấu hình ra ngoài
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Layouts
import { HeaderOnly } from '~/components/Layout';

// không cần đăng nhập vẫn thấy đc
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },

    {
        path: '/following',
        component: Following,
    },

    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

// phải đăng nhập ms thấy được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
