import styled from "styled-components";
export const UsericonWithinName = (props) => {
  const { image, name, isAdmin } = props;

  return (
    <Scont>
      <Simg height={160} width={160} src={image} alt={name} />
      <Sname>{name}</Sname>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scont>
  );
};
const Scont = styled.div`
  text-align: center;
`;
const Simg = styled.img`
  border-radius: 50%;
`;
const Sname = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
  padding-top: 4px;
`;
