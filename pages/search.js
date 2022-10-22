import Head from 'next/head'
import Header from '../components/Header'
import Response from '../response'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'


function Search({results}) {
const router = useRouter()
 
  return (
  <div className=''>
  
  <Head>
    <title>{router.query.term} - Google Search</title>
    <link rel='icon' href="/favicon.ico" />
  </Head>
    {/* header */}

    <Header />

    <SearchResults results={results} />

  </div>
  )
}

export default Search;



export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const useDummyData = false; //true for devlopment (mock results)
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
