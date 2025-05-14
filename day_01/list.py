nameList=['tushar','palak','aman','xyz']

print(nameList)
print(nameList[:3]) 
nameList[len(nameList)-1]="Changed"
print(nameList)
nameList.insert(0,"sachin")
print(nameList)
print(nameList.index("tushar"))