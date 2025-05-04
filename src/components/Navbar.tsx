import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items); // Access cart state from Redux

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link href="/">FreshShop</Link>
      </div>
      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/cart">
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
};

export default Navbar;
