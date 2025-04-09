def load_iocs(file):
    with open(file, 'r') as f:
        return [line.strip() for line in f.readlines()]

def scan_logs(ioc_list, log_file):
    with open(log_file, 'r') as f:
        logs = f.readlines()
    for line in logs:
        for ioc in ioc_list:
            if ioc in line:
                print(f"⚠️  IOC Match: '{ioc}' found in: {line.strip()}")

if __name__ == "__main__":
    iocs = load_iocs("python/iocs.txt")
    scan_logs(iocs, "logs/threats.log")
