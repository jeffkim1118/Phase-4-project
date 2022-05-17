import { Link, useNavigate } from "react-router-dom";

function Navbar({user, setUser}) {
  const navigate = useNavigate();
  function handleLogoutClick(){
    fetch("http://localhost:3000/logout", {method: "DELETE"}).then((r)=>{
      if(r.ok){
        setUser(null);
        navigate("./login", {replace:true});
      }
    });
  }
  return(
    <>
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
    
    </>
  )
}   
export default Navbar