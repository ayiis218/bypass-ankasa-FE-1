import Footer from '../../components/organisms/footer'
import style from '../../styles/Home.module.css'
import FormEditProfile from '../../components/organisms/FormEditProfile'

const EditProfile = () => {
  return (
    <>
      <div className={`row justify-content-center ${style.bodyWrapper}`}>
          <div className={`col-md-4 p-0 ${style.exploreWrapper}`}>
            <div className={`${style.fixHeight}`}>
              <h4 className="mb-3">Profile </h4>
              <FormEditProfile />
            </div>
            <Footer />
          </div>
      </div>
    </>
  )
}


export default EditProfile
