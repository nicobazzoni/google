import Head from 'next/head'
import Header from '../components/Header'


function Search() {
  return (
  <div>
  
  <Head>
    <title>Search Results</title>
    <link rel='icon' href="/favicon.ico" />
    </Head>
    {/* header */}

    <Header />
    


    {/* results */}
    <h1>Search</h1>
  
  </div>
  )
}

export default Search;