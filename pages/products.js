import Head from "next/head";
import Nav from "../components/Nav";

function Products({data}) {
    return (
        <div>
            <Head>
                <title>Products</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <h1>this is Products</h1>
    <p>{JSON.stringify(data)}</p>
        </div>
    );
}
export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: {...data}
    }, // will be passed to the page component as props
  }
}


export default Products;
