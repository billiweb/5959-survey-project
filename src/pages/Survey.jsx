import { useQuery } from 'react-query';
import { getSurvey } from '../api/survey';

function Survey() {
  const data = useQuery('survey', getSurvey);

  return <div>survey</div>;
}

export default Survey;
