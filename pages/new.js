import { Input, Form } from 'antd';

const New = () => {
  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Phrase" name="Phrase">
          <Input.TextArea
            allowClear
            autoSize={{ minRows: 3, maxRows: 10 }}
            placeholder="Enter phrase"
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
    </>
  );
};

export default New;
