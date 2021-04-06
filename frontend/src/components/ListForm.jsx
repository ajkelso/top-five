import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserList } from '../redux/actions/userActions'

function ListForm(props) {

    const [formData, setFormData] = useState({
        category: "",
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: ""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [e.target.name]: e.target.value
            }      
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUserList(formData))
        props.history.push('/profile')

    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="category" placeholder="Choose a Category..." onChange={handleChange} value={formData.category}/><br/>
                <label htmlFor="First">1.</label>
                <input type="text" name="first" onChange={handleChange} value={formData.first}/><br/>
                <label htmlFor="Second">2.</label>
                <input type="text" name="second" onChange={handleChange} value={formData.second}/><br/>
                <label htmlFor="Third">3.</label>
                <input type="text" name="third" onChange={handleChange} value={formData.third}/><br/>
                <label htmlFor="Fourth">4.</label>
                <input type="text" name="fourth" onChange={handleChange} value={formData.fourth}/><br/>
                <label htmlFor="Fifth">5.</label>
                <input type="text" name="fifth" onChange={handleChange} value={formData.fifth}/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ListForm