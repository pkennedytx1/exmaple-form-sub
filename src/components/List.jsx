import React from 'react'

export default function List({ submissions }) {
    return(
        <>  
            <h1>{submissions.length > 0 && 'Submissions'}</h1>
            {submissions.map((submission, i) => {
                return(
                    <div key={i}>
                        <h2>Name: {submission.name}</h2>
                        <h2>Email: {submission.email}</h2>
                    </div>
                )
            })}
        </>
    )
}