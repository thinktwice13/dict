import { List } from 'antd';
import PropTypes from 'prop-types';

const ListContainer = ({ data, renderItem }) => {
  return (
    <List
      // column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      style={{ width: '100%' }}
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={renderItem}
    />
  );
};

ListContainer.propTypes = {
  data: PropTypes.object.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default ListContainer;
