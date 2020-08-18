import { Input, Form, Row } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { SearchSelect } from '../components';
import { useState } from 'react';

const New = () => {
  const [phrase, setPhrase] = useState('');
  // const [hasPhraseChanged, setHasPhraseChanged] = useState(false);
  console.log({ phrase });

  // Will be used on multiple actions
  // Only use id phrase or note changed
  const savePhrase = () => {
    // TODO set hasChanged to false
    console.log('Saving phrase...');
  };

  return (
    <>
      <Row>
        <SearchSelect />
        <SyncOutlined style={{ fontSize: '24px' }} />
        <SearchSelect />
      </Row>
      <Row>
        <Form layout="vertical">
          <Form.Item label="Phrase" name="Phrase">
            <Input.TextArea
              allowClear
              autoSize={{ minRows: 3, maxRows: 10 }}
              placeholder="Enter phrase"
              value={phrase}
              onChange={(e) => {
                setPhrase(e.target.value);
              }}
              onBlur={savePhrase}
            />
          </Form.Item>
          <Form.Item label="Note" name="Note">
            <Input.TextArea
              allowClear
              autoSize={{ minRows: 3, maxRows: 10 }}
              placeholder="Enter note"
            />
          </Form.Item>

          <h3>Google translate will go here</h3>
        </Form>
      </Row>
    </>
  );
};

export default New;
