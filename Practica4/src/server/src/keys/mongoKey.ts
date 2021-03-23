let mongoCredentials = {
    user : process.env.USERDB || 'demo',
    password : process.env.USERPASS || 'demo',
    host : process.env.HOST || 'cluster0.f1nkq.mongodb.net/redes2?retryWrites=true&w=majority',
}

export default mongoCredentials;
