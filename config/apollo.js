import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from "node-fetch";
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'https://cndv-web-cidadao-ip43dic0z-gpfgv.vercel.app',
    fetch
});

const authLink = setContext((_, {headers}) => {

    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const apolloClient = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat( httpLink )
});

export default apolloClient;