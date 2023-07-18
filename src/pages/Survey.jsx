import { useQuery } from 'react-query';
import axios from 'axios';

function Survey() {

  const { data, isLoading, error } = useQuery('survey', async () => {
    const response = await axios.get('http://localhost:3001/survey');
    return response.data;
  });
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div>
      {data.map((post) => {
        return <div key={post.id}>{post.answer1}</div>;
      })}
    </div>
  );
}

export default Survey;
