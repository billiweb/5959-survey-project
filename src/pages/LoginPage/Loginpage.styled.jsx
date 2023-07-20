import styled from 'styled-components';

const LoginDiv = styled.div`
  width: auto;
  position: fixed;
  top: 45%;
  left: 50%;
  margin-top: 20px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 42px;
    text-align: center;
    padding: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 20px 40px #c6c6c6, 0px 15px 15px #c6c6c6;
    padding: 20px;
    width: 400px;
    height: auto;
    background-color: #fefdfb;
    border-radius: 4px;
  }

  label {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    padding: 5px;
    text-align: left;
  }

  input {
    font-size: 13px;
    width: 70%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #c6c6c6;

    &:active,
    &:focus {
      outline: none;
    }
  }
  p {
    padding: 10px;
    text-align: center;
  }
  button {
    width: 40%;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid grey;
    padding: 10px 10px;
    background-color: #dedede;
    color: black;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    &:active {
      box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
      position: relative;
      top: 2px;
    }
  }
`;
export default LoginDiv;
