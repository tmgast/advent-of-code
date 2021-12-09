import os

with open(os.path.abspath(os.getcwd()+"/data.txt"),'r') as file:
    lines = list(map(int, file.read().strip().split('\n')))

counter = 0

last = lines[0]
for v in lines:
    if v>last:
        counter +=1
    last = v

print("solution 1: "+ str(counter))

