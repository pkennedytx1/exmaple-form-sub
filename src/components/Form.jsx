import React from 'react'

export default function Form({
    name,
    setName,
    email,
    setEmail,
    submissions,
    setSubmissions,
    submitForm
}) {
    return(
        <>
            <h1>My Awesome Form</h1>
            <label htmlFor='name'>Name</label>
            <input
                onChange={(e) => setName(e.target.value)}
                type='text'
                name='name'
                value={name}
            />
            <label htmlFor='email'>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                name='email'
                value={email}
            />
            <button onClick={() => submitForm()}>Submit Form</button>
        </>
    )
}