function Logout({onLogout}) {
    function handleLogout() {
        fetch("http://localhost:3000/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
      return (
        <header>
          <button onClick={handleLogout}>Logout</button>
        </header>
      );  
}
export default  Logout