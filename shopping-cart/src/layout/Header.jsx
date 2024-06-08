import Nav from "../component/Nav"
import Summary from "../component/Summary"
const Header = (props) => {
  return (
    <>
        <Nav showCartHandler={props.showCartHandler}/>
        <Summary/>
    </>
  )
}

export default Header