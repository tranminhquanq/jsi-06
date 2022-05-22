import React, { useState, useEffect } from "react";
import { Grid, Pagination } from "@nextui-org/react";
import UserItem from "./UserItem";

const initialPage = 1;

const Usercontainer = () => {
  const [userReponse, setUserReponse] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const onChangePageHandler = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const getUsers = async () => {
      const request = await fetch(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      const response = await request.json();
      setUserReponse(response);
    };

    getUsers();
  }, [currentPage]);

  return (
    <>
      <Grid.Container gap={2}>
        {userReponse?.data.map((userObject) => {
          return (
            <Grid xs={4} key={userObject.id}>
              <UserItem userData={userObject} />
            </Grid>
          );
        })}
      </Grid.Container>
      <Pagination
        total={userReponse?.total_pages}
        initialPage={initialPage}
        onChange={onChangePageHandler}
      />
    </>
  );
};

export default Usercontainer;
