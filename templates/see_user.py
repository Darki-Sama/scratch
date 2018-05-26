def login():    
    user = input("Username: ")
    passw = input("Password: ")
    f = open("user.txt", "r")
    for line in f.readlines():
        us = line.strip().split(",")
        pw = line.strip().split(",")
        if (user in us) and (passw in pw):
            print ("Login successful!")
            return True
    print ("Wrong username/password")
    return False

def main():
    login()
main()
