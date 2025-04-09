all: build run

build:
	cd core && gcc main.c -o framex

run:
	./core/framex

scan-url:
	python3 python/vt_scan.py https://test-login.com

scan-iocs:
	python3 python/ioc_scan.py

gui:
	javac java/Dashboard.java && java -cp java Dashboard

fetch-iocs:
	bash automation/intel_fetch.sh
