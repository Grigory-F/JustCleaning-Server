import sequelize from '../utilites/db-config.js';

import { Articles, Users, Roles, Executors, Clients, PhoneNumbersClients, AddressesClents, PhoneNumbersExecutors, AddressesExecutors } from './db/models/models.js'

Executors.hasMany(Orders, {
});
Executors.hasMany(AddressesExecutors, {
});
Executors.hasMany(PhoneNumbersExecutors, {
});
Clients.hasMany(Orders, {
});
Clients.hasMany(AddressesClients, {
});
Clients.hasMany(PhoneNumbersClients, {
});
Users.hasMany(Roles, {
});


export default () => sequelize.sync({ force: true }).then(result => {
  console.log(result)
}).catch(err => {
  console.log(err);
})