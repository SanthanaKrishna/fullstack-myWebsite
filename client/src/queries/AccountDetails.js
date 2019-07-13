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

const addAccountMutation = gql`
    mutation($firstName:String!, $emailId:String!, $password:String!){
        addAccount(firstName:$firstName, emailId:$number,password:$password){
            firstName
            number
            emailId
            password
            phoneNumber
        }
    }
`

export { createAccountQuery, addAccountMutation }