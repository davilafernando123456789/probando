var mongoose = require('mongoose');
var Medico = require("../models/Medico");

var medicoController = {};

medicoController.list = function(req, res){
    
    Medico.find({}).exec(function(err, medicos){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/medico/index', {medicos: medicos,titulo:'INDEX'} );
        
    });
    
};

medicoController.show = function(req, res){
    Medico.findOne({_id: req.params.id}).exec(function(err, medico){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/medico/show', {medico: medico} );
    });
    
};

medicoController.create = function(req, res){
    res.render('../views/medico/create');
};
medicoController.save = function(req, res){
    var medico = new Medico( req.body ); 
    medico.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Medico creado. :)");
        //res.redirect("/productos/show/"+usuario._id);
        res.redirect("/medicos");
    });
};
medicoController.edit = function(req, res) {
    Medico.findOne({_id: req.params.id}).exec(function (err, medico) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/medico/edit", {medico: medico});
    
  });
};
medicoController.update = function(req, res){
    Medico.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        genero: req.body.genero,
        dni: req.body.dni,
        especialidad: req.body.especialidad,
        fecha_nacimiento: req.body.fecha_nacimiento,
        direccion: req.body.direccion,
        email: req.body.email,
        estado: req.body.estado
    }}, { new: true },
    function( err, medico){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/medico/edit', {medico: req.body} );
        }     
        console.log( medico );
        
        res.redirect('/medicos/show/' + medico._id);    
    });
};
medicoController.delete = function(req, res){
    
    Medico.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("medico eliminado!");
        res.redirect("/medicos");
    });
};
module.exports = medicoController;
