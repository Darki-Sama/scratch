from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort
import os

 
app = Flask(__name__)
 
@app.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return render_template('preguntas.html')

 
@app.route('/login', methods=['POST'])
def do_admin_login():
    f = open("user.txt", "r")
    contraseña = request.form['password']
    usuario = request.form['username']
    rol = request.form['rol']
    for line in f.readlines():
        us = line.strip().split(",")
        cn = line.strip().split(",")
        rl = line.strip().split(",")
        if (usuario in us):
            if (contraseña in cn):
                if (rol in rl):
                    session['logged_in'] = True
                    f.close()
                    if rol == 'admin':
                        return register()
    return home()

@app.route('/register', methods=['POST'])
def register():
    return render_template('register.html')
    r = open("user.txt", "a")
    contraseña2 = request.form['password2']
    usuario2 = request.form['username2']
    rol2 = request.form['rol2']
    curso = request.form['curso']
    r.write("\n" + usuario2 +",")
    r.write(contraseña2 + ",")
    r.write(rol2 + ",")
    r.write(curso)
    r.close()
    return register()
  
    
if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run(debug=True,host='localhost', port=4000)