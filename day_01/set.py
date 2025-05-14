set1={'name','abc','def','ghi'}
set2=set(['name','tushar','palak','mca',2025])


set1.add('aman')
set1.add('camel')
set2.remove('mca')
set1.discard("def")

odd_set={x for x in range(0,10) if x%2!=0}

set1.difference_update(set2)
print(set1.union(set2))
print(set2)
print(odd_set)