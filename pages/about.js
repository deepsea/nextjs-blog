import React from 'react';

function about({ profile }) {
    return (
        <div>
            <h1>This is {profile.name}'s' profile page</h1>
            <h2>He is {profile.age} years old</h2>
        </div>
    );
}

// Use this for Static, benefit of caching and quicker
// export async function getStaticProps() {

//     const data = {
//         profile: {
//             name: 'Richie',
//             age: 99
//         }
//     }

//     return {
//         props: {
//             profile: data.profile
//         }
//     }

// }

// use this for Server Side
export async function getServerSideProps() {
    const data = {
        profile: {
            name: 'Richie',
            age: 99,
        },
    };

    return {
        props: {
            profile: data.profile,
        },
    };
}

export default about;
