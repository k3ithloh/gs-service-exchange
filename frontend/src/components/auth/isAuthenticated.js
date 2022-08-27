import { useEffect, useState } from 'react';
import axios from 'axios';

export default function isAuthenticated() {
  const token = localStorage.getItem('ACCESS_TOKEN');
  
  if (token === null) {
    return false;
  } else {
    // axios.get('api/get_request_auth', {
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN,
    //   'endpoint': 'Solution/AllId',
    // }
    // }).then(res => {
    //     if (res.status === 200) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }).catch(err => {
    //     console.log(err);
    //     return false;
    //   }
    // );
    return true;
  }
}