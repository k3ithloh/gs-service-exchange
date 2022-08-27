import Layout from '../../components/layout';

export default function Post() {
  return <></>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await axios.get('https://api.gsserviceexchange.online/api/Solution', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
    }
  }).then(res => {
      return res.data;
    }).catch(err => {
      console.log(err);
    }
  );

  return {
    params: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const paths = await axios.get('https://api.gsserviceexchange.online/api/Solution', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
    }
  }).then(res => {
      return res.data;
    }).catch(err => {
      console.log(err);
    }
  );
}