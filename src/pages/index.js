import Dashboard from '@/components/dashboard';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Culture</title>
        <meta name="description" content="Criado por Leandro Finochio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Dashboard />
    </>
  );
}
