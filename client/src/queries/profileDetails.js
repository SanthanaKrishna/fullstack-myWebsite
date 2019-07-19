import { gql } from 'apollo-boost';

const getProfileDetails = gql`
    query($emailId:String){
        profileDetails(emailId: $emailId){
            firstName,
            lastName,
            emailId,
            phoneNumber
        }
    }
`

export { getProfileDetails };