import axios from 'axios';

// cấu hình Api  Creating an instance
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// async hàm này sẽ trả về 1 promise
// await là chờ
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);

    return response.data;
};

export default request;
