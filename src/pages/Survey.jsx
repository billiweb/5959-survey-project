import { useQuery } from 'react-query';
import axios from 'axios';

function Survey() {
  const { data } = useQuery('survey', async () => {
    const response = await axios.get('http://localhost:3001/survey');
    return response.data;
  });

  // console.log(result);
  // if (isLoading) {
  //   return <div>데이터 가져오는 중임</div>;
  // }

  return (
    <div>
      {data.map((post) => {
        return <>{post.answer1}</>;
      })}
    </div>
  );
}

export default Survey;
