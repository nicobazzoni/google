import Head from 'next/head'
import Header from '../components/Header'


function Search() {
  return <Head>
    <title>Search Results</title>
    <link rel='icon' href="/favicon.ico" />

    {/* header */}

    <Header />
    


    {/* results */}
    <h1>Search</h1>
  </Head>;
}

export default Search;