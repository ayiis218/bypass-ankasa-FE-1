import Footer from '../../components/organisms/footer'
import style from '../../styles/Home.module.css'

const EditProfile = () => {
  return (
    <>
      <div className={`row justify-content-center ${style.bodyWrapper}`}>
          <div className={`col-md-4 p-0 ${style.exploreWrapper}`}>
            <div className={`${style.fixHeight}`}>
              <h3> Edit Profile </h3>
            </div>
            <Footer />
          </div>
      </div>
    </>
  )
}


export default EditProfile
