import FooterOne from "../components/Footer"
import NavOne from "../components/NavBar"
import RightMenu from "../components/RightSide"
import HeroSlider from "./home"

const Home = () => {

  return (
    <>
      <div>
        < NavOne />
      </div>
      <div className="row p-4">
        <div className="col-lg-9">
          < HeroSlider />
        </div>
        <div className="col-lg-3">
          < RightMenu />
        </div>
      </div>
      <div>
        < FooterOne />
      </div>
    </>
  )
}
export default Home