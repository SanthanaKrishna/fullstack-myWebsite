const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema,
    GraphQLID, GraphQLString, GraphQLInt,
    GraphQLNonNull } = graphql;

const UserDetailsDB = require('../models/userDetails');

/**
 * define properties under type 
 * @name: 'UserDetails', is a type
 * this is just design mock/schema
 */
const UserDetailsType = new GraphQLObjectType({
    name: 'UserDetails',
    fields: () => ({
        userId: { type: GraphQLID },
        name: { type: GraphQLString },
        rollNo: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        userDetails: {
            type: UserDetailsType,
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
                userId: { type: new GraphQLNonNull(GraphQLInt) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                rollNo: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                let userDetails = new UserDetailsMock({
                    userId: args.id,
                    name: args.name,
                    rollNo: args.rollNo
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