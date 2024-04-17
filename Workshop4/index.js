import { ApolloServer, gql } from "apollo-server";


// Datos de las personas 
const persons = [
    {
        first_name: "Brian",
        last_name: "Laguna",
        cedula: "20-716-0356",
        age: "24",
        id: "24"
    },
    {
        first_name: "Juan",
        last_name: "Barrantes",
        cedula: "31-034-2238",
        age: "30",
        id: "32542-21655"
    },
    {
        first_name: "Carlos",
        last_name: "Rojas",
        cedula: "22-058-2408",
        age: "35",
        id: "582522-33231"
    },
];

// Definimos la estructura para la petición, y las posibles peticiones que vamos a hacer
const typeDefs = gql`
    

    type Address {
        cedula: String!
        age: String!
    }

    type Person {
        first_name: String!
        last_name: String!
        address: Address!
        id: ID!
    }

    type Query {
        personCount: Int!
        allPersons: [Person]!
    }
`;

// Resolvers para manejar las consultas
const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: (root, args) => {
            // Devolver todas las personas si no se especifica el filtro
            return persons;

        },
    },
    Person: {
        address: (root) => {
            return {
                cedula: root.cedula,
                age: root.age
            };
        }
    }
};

// Creamos el servidor Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Iniciamos el servidor
server.listen().then(({ url }) => {
    console.log(`Servidor Apollo listo en ${url}`);
});
