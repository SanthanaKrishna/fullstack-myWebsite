const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema,
    GraphQLID, GraphQLString, GraphQLInt,
    GraphQLNonNull, GraphQLList } = graphql;

const UserDetailsDB = require('../models/userDetails');

/**
 * define properties under type 
 * @name: 'UserDetails', is a type
 * this is just design mock/schema
 */
const UserDetailsType = new GraphQLObjectType({
    name: 'UserDetails',
    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        emailId: { type: GraphQLString },
        password: { type: GraphQLString },
        phoneNumber: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        userDetails: {
            type: new GraphQLList(UserDetailsType),
            //  args: { rollNo: { type: GraphQLInt } },
            resolve(parent, args) {
                console.log('sk', UserDetailsDB.find({}))
                return UserDetailsDB.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserDetailsType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                emailId: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                phoneNumber: { type: GraphQLInt }
            },
            resolve(parent, args) {
                let userDetails = new UserDetailsDB({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    emailId: args.emailId,
                    password: args.password,
                    phoneNumber: args.phoneNumber
                });
                console.log('mutation', userDetails)
                return userDetails.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})