import styled from "styled-components";
import { SearchInput } from "../../molecules/Searchinput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `猫 ${val}`,
    image: "https://source.unsplash.com/NodtnCsLdTE",
    email: "info@google.com",
    phone: "12345678",
    company: {
      name: "テスト会社"
    },
    website: "google.com"
  };
});

export const Users = () => {
  return (
    <Scontainar>
      <h2>ユーザーズ</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </Scontainar>
  );
};

const Scontainar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;