import Link from 'next/link';

const Home = props => (
  <div>
    <p>Thoriq akan menyelesaikan course wesbos!!</p>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </div>
);

export default Home;