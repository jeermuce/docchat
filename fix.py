import time
import os

while True:
    os.system("bunx biome check --fix --unsafe *")
    time.sleep(5)
    os.system("clear")
