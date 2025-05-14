class MyCustomError(Exception):
    def __init__(self,message,error_code):
        self.error_code = error_code
        super().__init__(message)
   
    

def calculate():
    try:
        dividend = int(input("Enter the dividend: "))
        divisor = int(input("Enter the divisor: "))
        if divisor == 0:
            raise MyCustomError("Division by zero is not allowed",400)
        result = dividend / divisor
        print(f"Result of division: {result}")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
    #except ValueError:
        #print("Error: Invalid input. Please enter valid integers.")
    else:
        print("Division successful.")
    finally:
        print("Program execution complete.")

calculate()