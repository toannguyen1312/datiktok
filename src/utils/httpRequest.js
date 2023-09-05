import axios from 'axios';

// cấu hình Api  Creating an instance
const request = axios.create({
    // start lại sẽ đc webpark tải lại biến môi trường
    baseURL: process.env.REACT_APP_BASE_URL,
});

// async hàm này sẽ trả về 1 promise
// await là chờ
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);

    return response.data;
};

export default request;
