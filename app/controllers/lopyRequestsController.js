const mongoose = require('mongoose');
const LopyRequest = mongoose.model('LopyRequest');

exports.getAll = function (req, res) {
    LopyRequest.find({}, function (err, user) {
        if (err)
            res.send(err);
        else
            res.json(user);
    });
};

exports.get = function (req, res) {
    LopyRequest.find({_id: req.params.id}, function (err, lopyRequest) {
        if (err)
            res.send(err);
        else {
            res.json(lopyRequest);
        }
    });
};

exports.update = function (req, res) {
    LopyRequest.findOneAndUpdate({
            _id: req.params.id,
        },
        req.body,
        {},
        function (err, lopyRequest) {
            if (err)
                res.send(err);
            else
                res.json(lopyRequest);
        });
};

exports.remove = function(req, res) {
    LopyRequest.deleteOne({
        _id: req.params.id,
    }, function(err, lopyRequest) {
        if (err)
            res.send(err);
        else
            res.json({
                message: 'LopyRequest successfully deleted'
            });
    });
};

exports.add = function(req, res, next) {
    LopyRequest.create({
        type: req.body.type,
        request: req.body.request
    }, function(err, result) {
        if (err) {
            next(err);
        } else {
            res.json({
                status: "success",
                message: "LopyRequest successfully added.",
                data: result
            });
        }
    });
};
