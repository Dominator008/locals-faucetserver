var lightwallet = require("eth-lightwallet");

if (!process.argv[2]) {
	console.log('Usage: ' + process.argv[1] + ' <password>');
	console.log('Creates a new lightwallet with given password');
	process.exit();
}

var password = process.argv[2];

lightwallet.keystore.createVault({
  seedPhrase: 'question eager diagram hill fall marriage hub nuclear disease manage bread awkward',
  password: password,
  hdPathString: 'm/44\'/60\'/0\'/0'
}, function (err, ks) {
  ks.keyFromPassword(password, function(err, pwDerivedKey) {
    if (err) {
      throw err;
    }
    ks.generateNewAddress(pwDerivedKey, 1);
    console.log(ks.serialize());
  });
});
