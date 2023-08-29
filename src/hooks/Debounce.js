// hooks này dùng đẻ fix gửi đi api nhiều lần trong khi nhập ô input tìm kiếm
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setdedbounceValue] = useState(value);

    useEffect(() => {
        const hander = setTimeout(() => setdedbounceValue(value), delay);

        return () => clearTimeout(hander);
    }, [value]);

    return debounceValue;
}
export default useDebounce;
