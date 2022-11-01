import { useEffect } from "react";
import { useState } from "react";
import { API_DOMAIN } from "../../constants";
import getData from "../../utils/getData";
import * as S from "./styles";

import { useSearchParams } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState({});
  let [searchParams] = useSearchParams();

  const getUserInfo = async (email) => {
    return await getData(API_DOMAIN + `/users?email=${email}`, {});
  };

  useEffect(() => {
    (async () => {
      const user = await getUserInfo(searchParams.get("email"));
      setUser({ ...user });
    })();
  }, []);

  return (
    <S.Wrapper>
      <h1>User info</h1>
      <form>
        <S.WrapperInfo>
          <div>
            <h3>Name: </h3>
            <h4>
              {user.firstName} {user.lastName}
            </h4>
          </div>
          <div>
            <h3>Phone: </h3>
            <h4>{user.phone}</h4>
          </div>
          <div>
            <h3>Email: </h3>
            <h4>{user.email}</h4>
          </div>
        </S.WrapperInfo>
      </form>
    </S.Wrapper>
  );
};

export default UserInfo;
