import time
import os

while True:
    os.system("bunx biome check --fix --unsafe *")
    time.sleep(0.1)
    os.system("clear")
