import { Table } from "antd";
import { useEffect, useState } from "react";

const List = () => {
  const [passanger, setpassanger] = useState([]);
  const [pagination, setpagination] = useState(1);

  useEffect(() => {
    const fetchPassanger = async () => {
      const response = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${pagination}&size=10`
      );
      const responseData = await response.json();
      setpassanger(responseData);
      console.log("responseData: ", responseData);
    };
    fetchPassanger();
  }, [pagination]);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Trip",
      dataIndex: "trips",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={passanger.data}
        pagination={{
          defaultPageSize: 10,
          total: passanger.totalPages,
          onChange: (page) => {
            console.log(page);
            setpagination(page);
          },
        }}
      />
    </div>
  );
};

export default List;
