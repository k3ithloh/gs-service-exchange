import Navbar from "../../components/index/navbar";
import Footer from "../../components/index/footer";
import axios from 'axios';

async function subscribe(){
  console.log(localStorage.getItem("ACCESS_TOKEN"));
  const req = await axios.post('https://api.gsserviceexchange.online/api/SolutionCustomer', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
    },
    data: {
      solutionId: 10,
      customerName: 'string'
    }
  }).then(res => {
    return res.data;
  }).catch(err => {
    console.log(err);
  });

  console.log(req);
}

const handleClick = (event) => {
  event.preventDefault();
  subscribe();
};

const hero = (serviceData) => {
  return (
    <div className="flex bg-grey_100 px-44 py-40">
      <div className="w-3/5 space-y-10">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-dark_blue">{serviceData.solutionTitle}</h1>
          <h2 className="text-2xl font-semibold text-grey_600">{serviceData.category}</h2>
        </div>
        <p className="text-xl font-light">
          {serviceData.description}
        </p>
        <div className="flex space-x-5">
          <button className="w-72 rounded-xl bg-blue p-3 font-semibold text-white hover:bg-dark_blue text-3xl">
            <div className="flex space-x-5 place-content-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              <a>Watch Demo</a>
            </div>
          </button>
          <button onClick={handleClick} className="w-72 rounded-xl bg-green p-3 font-semibold text-white hover:opacity-80 text-3xl">
            Get It Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default function service({ serviceData }) {
  return (
    <>
      <Navbar/>
        {hero(serviceData)}
        <div className="bg-pale_blue px-44 py-20">
          <div className="flex justify-between divide-x divide-green">
              {/* <h3 className="text-2xl font-semibold text-dark_blue">ser</h3> */}
              {serviceData.features.map((feat, index) => {
                return (
                  <div key={index} className="px-10 w-1/3">
                    <h3 className="text-3xl font-semibold text-dark_blue text-center">{feat.featureTitle}</h3>
                    <p className="text-xl font-light text-center">{feat.description}</p>
                  </div>
                )
              })}
          </div>
        </div>
      <Footer/>
    </>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  // const serviceIds = await axios.get('https://api.gsserviceexchange.online/api/service', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
  //   }
  // }).then(res => {
  //     return res.data;
  //   }).catch(err => {
  //     console.log(err);
  //   }
  // );

  // return serviceIds.map((serviceId) => {
  //   return {
  //     params: {
  //       id: serviceId
  //     }
  //   }
  // })
  const serviceIds = ["1","2","3","4","5","10"];
  const paths = serviceIds.map(serviceId => {
    return {
      params: {
        id: serviceId
      }
    }
  })
  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const serviceData = await axios.get('https://api.gsserviceexchange.online/api/solution/' + params.id, {
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
      serviceData,
    }
  }
}