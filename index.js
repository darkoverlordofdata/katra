require('coffee-script');
var huginn = require('huginn');
huginn.serve(['--port', process.env.OPENSHIFT_INTERNAL_PORT]);

