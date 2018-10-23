import os
import random

from sanic import Sanic
from sanic.response import json
from sanic.exceptions import abort
from sanic_auth import Auth, User
import sanic_cookiesession

debug = os.environ.get('DEBUG', '').lower() in {'1', 'true'}

app = Sanic()
app.config['SESSION_COOKIE_SECRET_KEY'] = 'slkfjasldkfja'
app.config['SESSION_COOKIE_SECURE'] = not debug
sanic_cookiesession.setup(app)
auth = Auth(app)
auth.handle_no_auth = lambda req: json({'error': 'Unauthorized'}, status=401)


@app.route("/")
async def index(request):
    return json({"status": "ok"})


@app.route("/point")
@auth.login_required(user_keyword='user')
async def point(request, user):
    return json({"point": random.randint(0, 10000)})


@app.route("/login", methods=['GET', 'POST'])
async def login(request):
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']
        if password == 'hogehoge':
            auth.login_user(request, User(id=1, name=username))
            return json({'status': 'ok'})
    return json({'error': 'Incorrect username or password'}, status=401)


@app.route("/logout", methods=['GET', 'POST'])
async def logout(request):
    auth.logout_user(request)
    return json({'status': 'ok'})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=debug)
