// import React, { useState } from 'react';
// import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { Home, ShoppingCart, MessageCircle } from 'react-feather'; // Import icons

// const SmokeButton = ({ to, text, icon: Icon }) => (
//   <div className="flex items-center gap-1">
//     {Icon && <Icon className="me-2" />}
//     {text}
//   </div>
// );

// const Navbar = () => {
//   const [cartCount, setCartCount] = useState(0);

//   const handleButtonClick = () => {
//     // Increment the cart count
//     setCartCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <NavbarBs className="shadow-sm mb-3 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-b-lg">
//       <Container className="d-flex justify-content-between align-items-center">
//         <Nav>
//           <Nav.Link to="/" as={NavLink} className="text-white">
//             <SmokeButton to="/store" text="Home" icon={Home} />
//           </Nav.Link>
//           <Nav.Link to="/store" as={NavLink} className="text-white">
//             <SmokeButton to="/store" text="Store" icon={ShoppingCart} />
//           </Nav.Link>
//           <Nav.Link to="/about" as={NavLink} className="text-white">
//             <SmokeButton to="/about" text="About" icon={MessageCircle} />
//           </Nav.Link>
//         </Nav>
//         <Button variant="outline-light" onClick={handleButtonClick}>
//           <ShoppingCart />
//           {cartCount > 0 && <span className="ms-1">{cartCount}</span>}
//         </Button>
//       </Container>
//     </NavbarBs>
//   );
// };

// export default Navbar;







import React, { useState } from 'react';
import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingCart, MessageCircle } from 'react-feather'; // Import icons
import { useShoppingCart } from '../context/ShoppingCartContext';

const SmokeButton = ({ to, text, icon: Icon }) => (
  <div className="flex items-center gap-1">
    {Icon && <Icon className="me-2" />}
    {text}
  </div>
);

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()


  return (
    <NavbarBs className="shadow-sm mb-3 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-b-lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav>
          <Nav.Link to="/" as={NavLink} className="text-white">
            <SmokeButton to="/store" text="Home" icon={Home} />
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="text-white">
            <SmokeButton to="/store" text="Store" icon={ShoppingCart} />
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="text-white">
            <SmokeButton to="/about" text="About" icon={MessageCircle} />
          </Nav.Link>
        </Nav>
          {cartQuantity> 0 && ( <Button 
        onClick={openCart}
          variant="outline-light"
          className="position-relative"
        >
         {cartQuantity} 
         <ShoppingCart />
        </Button>
          )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
