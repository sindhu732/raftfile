'use strict'

var express = require('express')

var mongoose = require('mongoose'),
	Bill = mongoose.model('Bill')

var fs = require('fs')
var	multiparty = require('multiparty');

var atob = require('atob');
//var cors = require('cors');

module.exports = function(Addbill, database) {
	return {
		uploadImg: function(req, res) {
			var count=0;
			var form = new multiparty.Form();
			var imagePath;
			var savePath;
			console.log('form');
			form.on('error', function(err) {
			  console.log('Error parsing form: ' + err.stack);
			});
			form.on('part', function(part) {
			  if (!part.filename) {
			    console.log('got field named ' + part.name);
			    part.resume();
			  }
			  if (part.filename) {
			    count++;
			    console.log('got file named ' + part.name);
			    part.resume();
			  }
			});
			form.on('file', function(name, file) {
				var newPath = './packages/custom/addbill/public/uploads/' + file.originalFilename;
				//originalFileName; // penguins.jpg
				//file.path; // C:\Users\Dell\AppData\Local\Temp\zCwJVeNPQFhiptzm7e4GRJ1j.jpg
				//imagePath = newPath; //./packages/custom/addbill/server/uploads/Penguins.jpg
				var data = fs.readFileSync(file.path, 'base64');
				var buffer = new Buffer(data, 'base64');
				fs.writeFileSync(newPath, atob(buffer), 'binary', function(err) {
						if (err)
							console.log('ERR!' + err);
						else
							console.log('Written to new location !');
					});
				savePath = '/addbill/uploads/' + file.originalFilename;
				imagePath = savePath;
			});
			form.on('close', function() {
			  console.log('Upload completed!');
			  res.setHeader('text/plain', 200);
			  res.end(imagePath);
			});
			form.parse(req);
		},

		postBill: function(req, res) {
			//var imageData = JSON.stringify(req.files);
			//console.log('Image data ' + imageData);
			var newBill = new Bill({
				created: req.body.created,
				billImage: req.body.billImage,
				amount: req.body.amount,
				detail: req.body.detail,
				date: req.body.date,
				claimed: req.body.claimed
			})
			newBill.save(function(err) {
				if (err)
					console.log(err);
			});
			res.json({'new_bill': newBill});
		},

		getBills: function(req, res) {
			// get bill details from database and send to client
			// limit = 10 ?
			Bill.find({claimed: false}).sort({date: 'desc'}).exec(function(err, results) {
				if(err)
					console.log('ERR! ', err);
				//console.log(results)
				})
		},

		claimBills: function(req, res) {
			//console.log('got in');
			console.log(req.body.fromDate);
			Bill.find({claimed: false, date: {
        				$gte: req.body.fromDate,
        				$lte: req.body.toDate
        			}}).sort({date: 'desc'}).exec(function(err, results) {
				if(err)
					console.log('ERR!' + err);
				//console.log(res.header('Access-Control-Allow-Origin'));
				res.json({'unclaimedBills': results});
			});
		}
		}
	}
