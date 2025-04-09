#!/bin/bash
echo "[*] Installing Nightmare Agent (persistent mode)..."
AGENT_SRC="python/agent.py"
AGENT_DEST="$HOME/.local/bin/framex_agent.py"

mkdir -p "$HOME/.local/bin"
cp "$AGENT_SRC" "$AGENT_DEST"
chmod +x "$AGENT_DEST"

echo "@reboot /usr/bin/python3 $AGENT_DEST &" | crontab -
echo "✅ Agent installed and persistent on reboot"
