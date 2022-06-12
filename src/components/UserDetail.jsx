import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  return <h1>User detail {userId}</h1>;
};

export default UserDetail;

/*

Nhóm 1: Thiện, H.Nhân, An, Quyền
Nhóm 2: Đức, Phát, Trọng Nhân, Châu
*/
