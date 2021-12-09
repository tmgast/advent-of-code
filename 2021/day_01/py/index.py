"""
    solving adjacent List item comparison
"""
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

counter = 0
calc = []
for i in range(len(lines)):
    calc.append(lines[i])
    if len(calc) == 4:
        if sum(calc[0:3]) < sum(calc[1:4]):
            counter +=1
        calc.pop(0)

print("solution 2: "+ str(counter))
