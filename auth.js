def authenticate_user(username, password):
    # Dummy authentication
    return username == "ange" and password == "1234"
from auth import authenticate_user
print(authenticate_user("admin", "password"))
