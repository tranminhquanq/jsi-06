import React, { useState } from "react";
import {
  Avatar,
  Button,
  Modal,
  Text,
  Input,
  Spacer,
  Grid,
  Card,
} from "@nextui-org/react";

const pictureUsers = [
  {
    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    color: "primary",
  },
  {
    src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    color: "secondary",
  },
  {
    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    color: "success",
  },
  {
    src: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    color: "warning",
  },
  {
    src: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    color: "gradient",
  },
];

const DemoNextUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Avatar text="a" size="xs" textColor="error" />
      {pictureUsers.map((pic) => (
        <Avatar size="sm" src={pic.src} color={pic.color} bordered zoomed />
      ))}

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={isOpen}
        width="400px"
        blur
      >
        <Modal.Header>
          <Text>Login Form</Text>
        </Modal.Header>
        <Modal.Body>
          <Input placeholder="Username" />
          <Spacer y={20} />
          <Input placeholder="Password" />
          <Button>Login</Button>
        </Modal.Body>
      </Modal>

      <Button color="error" shadow onClick={onCickHandler}>
        Open Modal
      </Button>

      <Grid.Container gap={2}>
        <Grid xs={3}>
          <Card color="primary">
            <Text>Hello</Text>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card color="secondary">
            <Text>Hello</Text>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card color="warning">
            <Text>Hello</Text>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card color="succes">
            <Text>Hello</Text>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card color="primary">
            <Text>Hello</Text>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card color="error">
            <Text>Hello</Text>
          </Card>
        </Grid>

        {/* <Grid xs={4}>ALo 3</Grid> */}
      </Grid.Container>
    </div>
  );
};

export default DemoNextUI;
