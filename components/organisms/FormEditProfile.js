import { Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import BaseButton from '../atoms/UI/BaseButton'
import { updateUser } from '../../redux/features/loggedInUser'

const FormEditProfile = () => {
  const dispatch = useDispatch()
  const loggedInUserState = useSelector(state => state.loggedInUser)
  const { user, isLoading } = loggedInUserState

  const passwordLength = {
    min: 6,
    max: 20
  }

  const EditProfileSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please insert a valid email")
      .required("Email field cannot be empty"),
    password: Yup.string()
      .min(passwordLength.min, `Password length must be ${passwordLength.min} or more characters`)
      .max(passwordLength.max, `Password shold not be more than ${passwordLength.max} characters`)
      .required('Password shold not be empty'),
    phone: Yup.string()
      .required("Phone field cannot be empty"),
    fullName: Yup.string()
      .required("Username cannot be empty"),
    nationality: Yup.string(),
  })

  const formikInitialValues = {
    email: user?.email || '',
    password: '',
    phone: user?.phone || '',
    fullName: user?.full_name || '',
    nationality: user?.nationality || '',
  }

  const formik = useFormik({
    initialValues: formikInitialValues,
    validationSchema: EditProfileSchema,
    enableReinitialize: true,
    onSubmit: (formUser) => {
      formUser.userId = user.user_id
      formUser.gender = 'male'
      formUser.role = 'user'
      dispatch(updateUser(formUser))
    }
  })

  return (
    <>
      {user ? (
        <Form method="POST" onSubmit={formik.handleSubmit}>
          <div className="form-section mb-5">
            <h5>Contact</h5>
            <Form.Group id="formInput" className="mb-3">
              <Form.Label className="text-secondary">Email</Form.Label>
              <Form.Control type="email" placeholder="e.g. example@mail.com" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </Form.Group>

            <Form.Group id="formInput" className="mb-3">
              <Form.Label className="text-secondary">Password</Form.Label>
              <Form.Control type="password" placeholder="type your password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            </Form.Group>

            <Form.Group id="formInput" className="mb-3">
              <Form.Label className="text-secondary">Phone Number</Form.Label>
              <Form.Control type="text" placeholder="e.g. 081283477012" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            </Form.Group>
          </div>
          <div className="form-section mb-5">
          <h5>Biodata</h5>
            <Form.Group id="formInput" className="mb-3">
              <Form.Label className="text-secondary">Username</Form.Label>
              <Form.Control type="text" placeholder="e.g. John Doe" name="fullName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullName} />
            </Form.Group>
            <Form.Group id="formInput" className="mb-3">
              <Form.Label className="text-secondary">Nationality</Form.Label>
              <Form.Control type="text" placeholder="e.g. Indonesia" name="nationality" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nationality} />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-end">
            <BaseButton type="submit" disabled={isLoading}>{isLoading ? 'Saving' : 'Save'}</BaseButton>
          </div>
        </Form>
      ) : (<h6 className="mt-3 text-secondary">Loading...</h6>)}
    </>
  )
}

export default FormEditProfile
