import React from "react";
import { Card, User, Text } from "@nextui-org/react";

const UserItem = (props) => {
  const data = props.userData;

  return (
    <Card shadow>
      <User src={data.avatar} name={`${data.first_name} ${data.last_name}`} />
      <Text h4 color="primary">
        {data.email}
      </Text>
    </Card>
  );
};

export default UserItem;
