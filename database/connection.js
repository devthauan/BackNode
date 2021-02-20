var knex = require('knex')({
    client: 'postgresql',
    connection: {
        host : 'ec2-54-144-251-233.compute-1.amazonaws.com',
        user : 'pvkdysvgjmfrxu',
        password : '5559e3bf7417029997fc421efb975ed18894c173f65b1392c46df0606100ac41',
        database : 'dbimnfgl6mvsbq'
     }
});
module.exports = knex