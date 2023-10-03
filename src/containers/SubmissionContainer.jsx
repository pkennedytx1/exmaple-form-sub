import React, { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'

export default function SubmissionContainer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submissions, setSubmissions] = useState([])

    const submitForm = () => {
        setSubmissions([
            ...submissions,
            {
                name,
                email
            }
        ])
        setName('')
        setEmail('')
    }

    return(
        <>
            <Form
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                submissions={submissions}
                setSubmissions={setSubmissions}
                submitForm={submitForm}
            />
            <List submissions={submissions}/>
        </>
    )
}