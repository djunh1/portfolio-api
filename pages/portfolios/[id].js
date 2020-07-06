
import {useRouter} from 'next/router';

// const PortfolioDetail = () => {

//   const router = useRouter();

//   // same as router.query.id, use {}
//   const { id } = router.query;

//   return (
//   <h1>Portfolio with ID: {id}</h1>
//   )
// }

const PortfolioDetail = ({query}) => {

  const router = useRouter();
  const { id } = query;

  return (
  <h1>Portfolio with ID: {id}</h1>
  )
}

// Note that the class method will call from the server.
PortfolioDetail.getInitialProps = ({query}) => {
  return {query};
}

export default PortfolioDetail;
