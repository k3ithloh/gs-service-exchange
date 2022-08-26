import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Navbar from '../components/navbar';

const Index = () => {
  const router = useRouter();

  return (
    <Navbar/>
  );
};

export default Index;
