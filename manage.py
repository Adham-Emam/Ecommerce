from flask import Flask
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_login import LoginManager
from config import Config


app = Flask(__name__)
app.config.from_object(Config)

load_dotenv()

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)


login_manager = LoginManager(app)
login_manager.login_view = 'login'

if __name__ == '__main__':
    app.run(debug=True)
