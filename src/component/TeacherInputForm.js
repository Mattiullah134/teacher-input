import React, { useState } from 'react'
import './TeacherInputForm.css'
const TeacherInputForm = () => {
    const teacherData = {
        firstName: "",
        lastName: "",
        email: "",
        cnic: "",
        dateOfBirth: "",
        phoneNumber: "",
        address: "",
        gender: "",
        teachingExperience: "",
        degree: "",
        reference: "",
        previousCollege: "",
        subject: "",
        salary: "",
        contractBase: false,
        salaryBase: false,
    }

    const [teacherDataForm, setTeacherData] = useState(teacherData);
    // console.log(teacherDataForm)
    const firstNameHandler = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, firstName: e.target.value });
        console.log(teacherDataForm)
    }
    const lastNameHandler = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, lastName: e.target.value });

    }
    const emailHandler = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, email: e.target.value });

    }
    const cnicHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, cnic: e.target.value });

    }
    const dataOfBirthHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, dateOfBirth: e.target.value });

    }
    const phoneNoHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, phoneNumber: e.target.value });

    }
    const addressHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, phoneNumber: e.target.value });
        
    }
    const genderHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, gender: e.target.value });

    }

    const teachExpHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, teachingExperience: e.target.value });

    }
    const degreeHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, degree: e.target.value });

    }
    const referenceHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, reference: e.target.value });

    }
    const preCollegeHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, previousCollege: e.target.value });

    }
    const subjectHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, subject: e.target.value });

    }
    const salaryHanlder = (e) => {
        // console.log(e.target.value)
        setTeacherData({ ...teacherDataForm, salary: e.target.value });

    }
    const contractBaseHanlder = (e) => {
        // console.log(e);
        setTeacherData({ ...teacherDataForm, contractBase: true })
    }
    const salaryBaseHanlder = (e) => {
        // console.log(e);
        setTeacherData({ ...teacherDataForm, salaryBase: true })

    }
    const formData = (e) => {
        e.preventDefault();
        console.log(teacherDataForm)
    }
    return (
        <div className='container pt-5' style={{ width: '80%' }}>
            <form className="row g-3 needs-validation"  onSubmit={formData}>
                <div className="mb-3">
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" onChange={firstNameHandler} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Otto" onChange={lastNameHandler} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Email</label>
                    <input type="email" className="form-control" id="validationCustom02" placeholder="random@gmail.com" onChange={emailHandler} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">CNIC</label>
                    <input type="number" className="form-control" id="validationCustom02" placeholder="12345-6789789-9" onChange={cnicHanlder} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4  ">
                    <label htmlFor="validationCustom02" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="validationCustom02" placeholder="random@gmail.com" onChange={dataOfBirthHanlder} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="validationCustom02" placeholder="random@gmail.com" onChange={phoneNoHanlder} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={addressHanlder} />
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-select " aria-label="Default select example" onChange={genderHanlder}>
                        <option value=''>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Teaching Experience</label>
                    <input type="text" className="form-control" id="validationCustom02" required onChange={teachExpHanlder} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Degree</label>
                    <input type="text" className="form-control" id="validationCustom02" required onChange={degreeHanlder} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Reference</label>
                    <input type="text" className="form-control" id="validationCustom02" required onChange={referenceHanlder} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Previous College</label>
                    <input type="text" className="form-control" id="validationCustom02" required onChange={preCollegeHanlder} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Subject/Courses</label>
                    <input type="text" className="form-control" id="validationCustom02" required onChange={subjectHanlder} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Salary</label>
                    <input type="number" className="form-control" id="validationCustom02" required onChange={salaryHanlder} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheckforContactBaase"  onChange={contractBaseHanlder} />
                        <label className="form-check-label" htmlFor="invalidCheckforContactBaase">
                            Contract Base
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheckforSalaryBaase"  onChange={salaryBaseHanlder} />
                        <label className="form-check-label" htmlFor="invalidCheckforSalaryBaase">
                            Permanent
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="teacher-input-form-btn" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default TeacherInputForm
