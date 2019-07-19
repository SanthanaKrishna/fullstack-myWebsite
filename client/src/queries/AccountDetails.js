import { gql } from 'apollo-boost';

const createAccountQuery = gql`
    {
        createAccount{
            firstName
            lastName
            emailId
            password
            phoneNumber
        }
    }
 `

const createAccountMutation = gql`
    mutation($firstName:String!, $lastName: String, $emailId:String!, $password:String!, $phoneNumber:String){
        addAccount(firstName:$firstName, lastName:$lastName, emailId:$number, password:$password, phoneNumber:$phoneNumber){
            firstName
            lastName
            emailId
            password
            phoneNumber
        }
    }
`

export { createAccountQuery, createAccountMutation }