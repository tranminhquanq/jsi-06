import React from "react";
import { Grid } from "@nextui-org/react";
import UserItem from "./UserItem";
import { mockUsers } from "../constants/user";

const Usercontainer = () => {
  return (
    <Grid.Container gap={2}>
      {mockUsers.map((userObject) => {
        return (
          <Grid xs={4} key={userObject.id}>
            <UserItem userData={userObject} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default Usercontainer;
