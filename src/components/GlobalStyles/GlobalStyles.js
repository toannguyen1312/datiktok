import './GlobalStyles.scss';

// kiểm tra kiểu dữ liệu props Enlement
import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
