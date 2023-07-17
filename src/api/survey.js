import axios from 'axios';

const getSurvey = async () => {
  const response = await axios.get(`$(REACT_APP_SERVER_URL)`);
  console.log('>>', response);
  return response;
};

export { getSurvey };
