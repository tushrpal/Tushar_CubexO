"""
dic1={'name':'tushar','age':22,'claas':"mca"}
dic2={'name':'palak','age':22,'claas':"mca"}

dic3=dic1.copy()
value=[50]
dic4=dic1.fromkeys(dic1,value)
value.append(20)

print(dic4)

d1 = {"subjects":['computer','maths','oops'], "marks": [90, 85, 95]}
d2 = {("teachers","faculty"):'computer dept' , ('contact, mail'):'goOnWebsite'}

print(d1 , d2)
"""
from operator import itemgetter

dictionary={'one':1,'four':4,'two':2,'nine':9,'three':3}

vals=dictionary.values()
a=list(vals)
a.sort()
for i in range(0,len(dictionary)):
    for k,v in dictionary.items():
        if v == a[i]:
            print(k,v)


sorted_d=sorted(dictionary.items(),key=itemgetter(1))

sorted_dic=dict(sorted_d)
print(sorted_dic)