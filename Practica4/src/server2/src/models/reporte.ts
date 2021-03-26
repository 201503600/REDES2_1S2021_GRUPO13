const { Schema, model } = require("mongoose");

const reporteSchema = Schema({
        carnet:{ 
            type:Number, 
            required:true
        },
        nombre:{ 
            type:String, 
            required:true
        },
        curso:{ 
            type:String, 
            required:true
        },
        detalle:{ 
            type:String, 
            required:true
        },
        servidor:{ 
            type:String, 
            required:true
        },
        servidoractual:{ 
            type:String, 
            required:false
        }
    },{
        timestamps: true,
        versionKey: false
    }
)

const Reporte = model('Reporte', reporteSchema)
export{Reporte}