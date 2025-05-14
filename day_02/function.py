# def testfunction(arg):#immutable
#    print ("ID inside the function:", id(arg))
#    arg = arg + 1
#    print ("new object after increment", arg, id(arg))

# var=10
# print ("ID before passing:", id(var))
# testfunction(var)
# print ("value after function call", var)

def testfunction(arg):
   print ("Inside function:",arg)
   print ("ID inside the function:", id(arg))
   arg=arg.append(100)
   
var=[10, 20, 30, 40]
print ("ID before passing:", id(var))
testfunction(var)
print ("list after function call", var)

