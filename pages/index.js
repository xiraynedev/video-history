import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>History Microservice</title>
      </Head>
      <div>
        <h1>History Microservice Online</h1>
        <Link href='/api/view?id=632246dcd074f1cb6bd961cf' passHref>
          <Button variant='contained' size='large'>Proceed to viewed history</Button>
        </Link>
      </div>
    </>
  );
}
