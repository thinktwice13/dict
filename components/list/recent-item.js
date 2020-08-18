import { List } from 'antd';
import PropTypes from 'prop-types';

const RecentListItem = ({ title, description }) => (
  <List.Item>
    <List.Item.Meta title={title} description={description} />
  </List.Item>
);

RecentListItem.propTypes = {
  title: PropTypes.string.isRequired, // TODO update
  description: PropTypes.string.isRequired,
};

export { RecentListItem };
