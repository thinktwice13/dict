import { List } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';

const RecentListItem = ({ id, title, description }) => (
  <Link href="/phrases/[phraseId]" as={`/phrases/${id}`}>
    <a>
      <List.Item>
        <List.Item.Meta title={title} description={description} />
      </List.Item>
    </a>
  </Link>
);

RecentListItem.propTypes = {
  title: PropTypes.string.isRequired, // TODO update
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { RecentListItem };
