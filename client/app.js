var Promise = require('bluebird');
var client = require('./loopback.js');
var productSKUs = ['product1sku', 'product3sku'];
var filter = {
  include: {
    relation: 'productModels',
    scope: {
      fields: ['sku', 'binLocation'],
      where: {
        sku: {
          inq: productSKUs
        }
      }
    }
  }
};

return client.models.StoreConfigModel.findById(1, filter)
.then(function (response) {
  console.log('Found this store config model with products', response);
  return Promise.resolve(response);
})
.catch(function (error) {
  console.log('Error', error);
  return Promise.reject(error);
})
