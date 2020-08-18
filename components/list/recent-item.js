import { List } from 'antd';
import PropTypes from 'prop-types';

const RecentListItem = ({ text }) => <List.Item>{text}</List.Item>;

RecentListItem.propTypes = {
  text: PropTypes.string.isRequired, // TODO update
};

export { RecentListItem };
