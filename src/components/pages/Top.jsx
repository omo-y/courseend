import styled from "styled-components";
import { SecondaryBotton } from "../atoms/button/SecondaryBotton";
import { useHistory } from "react-router-dom";
export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: "/Users", state: (isAdmin = true) });
  const onClickgeneral = () =>
    history.push({ pathname: "/Users", state: (isAdmin = false) });
  return (
    <Scontainar>
      <h2>ＴＯＰページ</h2>
      <SecondaryBotton onClick={onClickAdmin}>管理者ユーザー</SecondaryBotton>
      <br />
      <br />
      <SecondaryBotton onClick={onClickgeneral}>一般ユーザー</SecondaryBotton>
    </Scontainar>
  );
};

const Scontainar = styled.div`
  text-align: center;
`;
