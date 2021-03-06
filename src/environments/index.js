module.exports = {
    service: {
        name: 'FAAS'
    },
    server: {
        url: 'http://0.0.0.0:8000',
        ip: '0.0.0.0',
        port: 8000,
    },
    auth: {
        jwtSecret: 'secret',
    },
    db: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "Admin@1234",
        DB: "faas",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};
