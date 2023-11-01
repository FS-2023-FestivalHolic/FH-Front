const Header = () => {
  if(window.location.pathname === '/login'&&'/register') return null
  return (
    <div>header 부분입니다.</div>
  );
};
  
export default Header;