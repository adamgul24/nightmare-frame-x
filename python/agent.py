import socket, time, platform, uuid, os
from crypto_utils import encrypt_message, decrypt_message

HOST = '127.0.0.1'
PORT = 9999

def get_system_info():
    return f"{uuid.uuid4()} | {platform.system()} {platform.release()} | Uptime: {int(time.time())}"

def connect_loop():
    while True:
        try:
            client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            client.connect((HOST, PORT))
            msg = encrypt_message(get_system_info())
            client.sendall(msg)
            while True:
                data = client.recv(1024)
                if not data:
                    break
                cmd = decrypt_message(data).decode()
                print(f"[C2 CMD] {cmd}")
                if cmd.lower() == "exit":
                    break
                elif cmd.lower() == "ping":
                    client.sendall(encrypt_message("PONG"))
                else:
                    client.sendall(encrypt_message(f"Executed: {cmd}"))
            client.close()
        except:
            time.sleep(60)

if __name__ == "__main__":
    connect_loop()
