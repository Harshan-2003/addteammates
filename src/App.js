import React, { useState } from 'react';
import { Button, Modal, Space, Table, Tag } from 'antd';
import './App.css'; // Import Ant Design styles
const { Column, ColumnGroup } = Table;

const TeammatesPopup = ({ teammates, isVisible, onClose }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = teammates.map((teammate, index) => ({
    key: index.toString(),
    name: `${teammate.firstName} ${teammate.lastName}`,
    age: teammate.age,
    address: teammate.address,
    tags: teammate.tags,
  }));

  return (
    <Modal
      title="Teammates"
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <Table columns={columns} dataSource={data} />
    </Modal>
  );
};

const App = () => {
  const [teammatesPopupVisible, setTeammatesPopupVisible] = useState(false);
  const teammates = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const openTeammatesPopup = () => {
    setTeammatesPopupVisible(true);
  };

  const closeTeammatesPopup = () => {
    setTeammatesPopupVisible(false);
  };

  return (
    <div>
      <Button id="Button" type="primary" onClick={openTeammatesPopup}>
        Find Teammates
      </Button>

      <TeammatesPopup
        teammates={teammates}
        isVisible={teammatesPopupVisible}
        onClose={closeTeammatesPopup}
      />
    </div>
  );
};

export default App;
