import React from "react";
import { Link } from "react-router-dom";
import { Card, User, Text } from "@nextui-org/react";

const UserItem = (props) => {
  const data = props.userData;

  return (
    <Card shadow>
      <Link to={`/users/${props.userData.id}`}>
        <User src={data.avatar} name={`${data.first_name} ${data.last_name}`} />
        <Text h4 color="primary">
          {data.email}
        </Text>
      </Link>
    </Card>
  );
};

export default UserItem;
