import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
         <img src="logo.svg" alt="" />
         <span>KyrwaPanel</span>
         </div>
      <div className="icons">
      <img src="./search.svg" alt="search" className="icons" />
      <img src="./app.svg" alt="app" className="icons" />
      <img src="./expand.svg" alt="expand" className="icons" />
      <div className="notification">
        <img src="./notifications.svg" alt="notifications" />
        <span>1</span>
      </div>
      <div className="user" >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePEHhdIhRu-ytY8kpBH9S6nuTGYi6m4h0AbaASMz2Hw&s" 
         alt="ava" 
         />
        <span>Admin Nikita</span>
      </div>
      <img src="./settings.svg" alt="settings" className="icons" />
      </div>
    </div>


  )
}
