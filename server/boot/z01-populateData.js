var Promise = require('bluebird');
module.exports = function (app, cb) {
  console.log('will create some data');
  var StoreConfigModel = app.models.StoreConfigModel;
  var ProductModel = app.models.ProductModel;
  return StoreConfigModel.create({
    name: 'Some store config model'
  })
    .then(function (storeConfigModelInstance) {
      console.log('Created store config model', storeConfigModelInstance);
      console.log('Will create some products now');
      var products = [{
        name: 'product1',
        sku: 'product1sku',
        binLocation: 'product1bin'
      },{
        name: 'product2',
        sku: 'product2sku',
        binLocation: 'product2bin'
      }, {
        name: 'product3',
        sku: 'product3sku',
        binLocation: 'product3bin'
      }];
      return storeConfigModelInstance.productModels.create(products);
    })
    .then(function (productInstances) {
      console.log('created products', productInstances);
      return cb();
    })
    .catch(function (error) {
      console.log('ERROR', error);
      return cb(error);
    })
};
