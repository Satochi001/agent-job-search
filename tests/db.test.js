const {Sequelize} = require('sequelize');
require ('dotenv').config();

// decribe our data base connection
describe ('Database Connection', ()=>{

    let sequelize;

    beforeAll(()=> {
        sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {


            host : process.env.HOST,
            port :  process.env.PORT,
            dialect: 'postgres',
            logging: false, 


            }
        );
    });

    afterAll(async () => {
        await sequelize.close();
    });

    test('should connect to database successfully', async () => {
        await expect (sequelize.authenticate()).resolves.not.toThrow();
    });

});

