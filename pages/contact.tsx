import React from 'react'

interface Props {
    contactDetails: {
        name: string,
        number: number,
        address: string
    }
}

function Contact({contactDetails}: Props) {
    return (
        <div>
            <h1>The contact ME page</h1>
            <h2>My name is {contactDetails.name}</h2>
        </div>
    )
}

export async function getStaticProps() {
    const contactDetails = {
        name: 'Richie',
        number: '087654321',
        address: '123 react Lane'
    }

    return {
        props: {
            contactDetails
        }
    }
}

export default Contact
