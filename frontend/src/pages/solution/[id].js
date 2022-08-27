export default function Post({ solutionData }) {
  return <>{solutionData.solutionId}</>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const solutionIds = await axios.get('https://api.gsserviceexchange.online/api/Solution', {
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

  return solutionIds.map((solutionId) => {
    return {
      params: {
        id: solutionId
      }
    }
  })
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const solutionData = await axios.get('https://api.gsserviceexchange.online/api/Solution/' + params.id, {
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
    props: {
      solutionData,
    }
  }
}