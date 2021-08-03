import styled from "styled-components";
import { SecondaryBotton } from "../atoms/button/SecondaryBotton";
export const Top = () => {
  const onClickAdmin = () => alert("管理");
  const onClickgeneral = () => alert("一般");
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
