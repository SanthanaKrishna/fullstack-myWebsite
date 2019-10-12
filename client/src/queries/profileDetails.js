import { gql } from 'apollo-boost';

const getProfileDetails = gql`
    {
        userDetails{
            firstName,
            lastName,
            emailId,
            password,
            phoneNumber
        }
    }
`

export { getProfileDetails };