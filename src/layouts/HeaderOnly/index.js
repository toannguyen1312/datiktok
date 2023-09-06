// di chuyển giữa các trang vẫn giữ nguyên
import Header from '~/layouts/components/Header/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <div className="content">
                    {/* mõi lần phải thay đổi */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
