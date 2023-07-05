from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend

# configuro la base de datos, con el nombre el usuario y la clave
#app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:@localhost/proyecto'
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://Refusilo:pericote20mp@Refusilo.mysql.pythonanywhere-services.com/Refusilo$proyecto'
# URI de la BBDD                          driver de la BD  user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none
db= SQLAlchemy(app)   #crea el objeto db de la clase SQLAlquemy
ma=Marshmallow(app)   #crea el objeto ma de de la clase Marshmallow

# defino la tabla
class Plato(db.Model):   # la clase Producto hereda de db.Model
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    descrip=db.Column(db.String(400))
    imagen=db.Column(db.String(400))
    def __init__(self,nombre,precio,descrip,imagen):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.precio=precio
        self.descrip=descrip
        self.imagen=imagen


    #  si hay que crear mas tablas , se hace aqui


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
class PlatoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','precio','descrip','imagen')


plato_schema=PlatoSchema()            # El objeto plato_schema es para traer un plato
platos_schema=PlatoSchema(many=True)  # El objeto platos_schema es para traer multiples registros de platos


# crea los endpoint o rutas (json)
@app.route('/platos',methods=['GET'])
def get_Plato():
    all_platos=Plato.query.all()         # el metodo query.all() lo hereda de db.Model
    result=platos_schema.dump(all_platos)  # el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla


@app.route('/platos/<id>',methods=['GET'])
def get_producto(id):
    plato=Plato.query.get(id)
    return plato_schema.jsonify(plato)   # retorna el JSON de un plato recibido como parametro


@app.route('/platos/<id>',methods=['DELETE'])
def delete_plato(id):
    plato=Plato.query.get(id)
    db.session.delete(plato)
    db.session.commit()
    return plato_schema.jsonify(plato)   # me devuelve un json con el registro eliminado

@app.route('/platos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    precio=request.json['precio']
    descrip=request.json['descrip']
    imagen=request.json['imagen']
    new_plato=Plato(nombre,precio,descrip,imagen)
    db.session.add(new_plato)
    db.session.commit()
    return plato_schema.jsonify(new_plato)

@app.route('/platos/<id>' ,methods=['PUT'])
def update_producto(id):

    plato=Plato.query.get(id)
    plato.nombre=request.json['nombre']
    plato.precio=request.json['precio']
    plato.descrip=request.json['descrip']
    plato.imagen=request.json['imagen']

    db.session.commit()
    return plato_schema.jsonify(plato)


# programa principal *******************************
# if __name__=='__main__':
#     app.run(debug=True, port=5000)    # ejecuta el servidor Flask en el puerto 5000


@app.route('/')
def hello_world():
    return 'Hello from Flask!'
