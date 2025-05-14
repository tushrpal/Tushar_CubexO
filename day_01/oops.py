# Parent Class
class Dog:
    def sound(self):
        print("dog sound")  # Default implementation

# Run-Time Polymorphism: Method Overriding
class Labrador(Dog):
    def sound(self):
        print("Labrador woofs")  # Overriding parent method

class Beagle(Dog):
    def sound(self):
        print("Beagle Barks")  # Overriding parent method

# Compile-Time Polymorphism: Method Overloading Mimic
class Calculator:
    def add(self, a, b=0, c=0):
        return a + b + c  # Supports multiple ways to call add()

# Run-Time Polymorphism
dogs = [Dog(), Labrador(), Beagle()]
for dog in dogs:
    dog.sound()  # Calls the appropriate method based on the object type


# Compile-Time Polymorphism (Mimicked using default arguments)
calc = Calculator()
print(calc.add(5, 10))  # Two arguments
print(calc.add(5, 10, 15))  # Three arguments

class student:
    sch_name="DAVV"

    def __init__(self,name,year):
        self.name=name
        self.year=year
    
student1=student("tushar",2023)
student2=student("palak",2023)

#print(student1.name, student1.year)
#print(student2)

class art(student):

    def arts(self):
        print("art is performed by",self.name)

artstud1=art("lucky",2023)

artstud1.arts()