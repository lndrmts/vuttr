import styled from 'styled-components';

export const Title = styled.h1`
  text-align: left;
  font-family: 'Source Sans Pro';
  font-size: 42px;
  font-weight: Semibold;
  line-height: 50px;
  letter-spacing: 0.84px;
  color: #170c3a;
`;
export const SubTitle = styled.h2`
  text-align: left;
  font-family: 'Source Sans Pro';
  font-size: 36px;
  font-weight: Semibold;
  line-height: 40px;
  letter-spacing: 0.72px;
  color: #170c3a;
`;
export const Container = styled.div`
  max-width: 970px;
  margin: auto;
  padding: 60px 15px;
`;

export const ListItem = styled.article`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  padding: 15px;
  position: relative;
  + article {
    margin-top: 35px;
  }
  h1 {
    text-align: left;
    font-family: 'Source Sans Pro';
    font-size: 30px;
    font-weight: semibold;
    line-height: 36px;
    letter-spacing: 0.6;
    margin-bottom: 10px;
    color: #365df0;
  }
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
    color: #f95e5a;
  }
`;

export const InputSearch = styled.input`
  opacity: 1;
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  padding: 13px 21px 12px;
`;

export const CheckOnlyTags = styled.input`
  margin-left: 15px;
  margin-right: 8px;
`;

export const ContainerFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const ButtonAddItem = styled.button`
  float: right;
  background-color: #0dcb7d;
  border-radius: 5px;
  border: none;
  height: 42px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
  font-family: 'Source Sans Pro';
  font-size: 18px;
  line-height: 20px;
  cursor: pointer;
  img {
    margin-right: 15px;
  }
  :hover {
    background-color: #10b26c;
  }
`;
export const FormContainer = styled.div`
  input,
  textarea {
    display: block;
    width: 100%;
    margin-top: 5px;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;
export const GroupButtons = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: flex-end;
  button + button {
    margin-left: 15px;
  }
`;
export const MessageContainer = styled.div`
  height: 50px;
  background-color: #12db89;
  display: flex;
  align-items: center;
  justify-content: center;
`;
