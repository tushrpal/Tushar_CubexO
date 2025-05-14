Exception Handling in Python
    Exception handling in Python refers to managing runtime errors that may occur during the execution of a program. In Python, exceptions are raised when errors or unexpected situations arise during program execution, such as division by zero, trying to access a file that does not exist, or attempting to perform an operation on incompatible data types.

Assertions in Python
    The easiest way to think of an assertion is to liken it to a raise-if statement (or to be more accurate, a raise-if-not statement). An expression is tested, and if the result comes up false, an exception is raised.  
    The syntax for assert is −
    assert Expression[, Arguments]

    ex-
    def KelvinToFahrenheit(Temperature):
    assert (Temperature >= 0),"Colder than absolute zero!"          #error
    return ((Temperature-273)*1.8)+32
    print (KelvinToFahrenheit(273))
    print (int(KelvinToFahrenheit(505.78)))
    print (KelvinToFahrenheit(-5))  

    Exception(try except block)

        try:
            You do your operations here
            ......................
        except ExceptionI:
            If there is ExceptionI, then execute this block.
        except ExceptionII:
            If there is ExceptionII, then execute this block.
            ......................
        else:
            If there is no exception then execute this block.

        The try-finally Clause
            You can use a finally: block along with a try: block. The finally block is a place to put any code that must execute, whether the try-block raised an exception or not. The syntax of the try-finally statement is this −
           
            try:
                You do your operations here;
                ......................
                 Due to any exception, this may be skipped.
            finally:
                This would always be executed.
                ......................
            

Python Virtual Environment
    Python virtual environments create a virtual installation of Python inside a project directory. Users can then install and manage Python packages for each project. This allows users to be able to install packages and modify their Python environment without fear of breaking packages installed in other environments.

    While developing an application in Python, one or more libraries may be required to be installed using the pip utility (e.g., pip3 install somelib). Moreover, an application (let us say App1) may require a particular version of the library − say somelib 1.0. At the same time another Python application (for example App2) may require newer version of same library say somelib 2.0. Hence by installing a new version, the functionality of App1 may be compromised because of conflict between two different versions of same library.

    This conflict can be avoided by providing two isolated environments of Python in the same machine. These are called virtual environment. A virtual environment is a separate directory structure containing isolated installation having a local copy of Python interpreter, standard library and other modules.

    create
    C:\pythonapp>python -m venv myvenv

    activate
    myvenv\scripts\activate.bat

    deactivate
    myvenv\scripts\activate.bat



Date Time- 

        A Python program can handle date and time in several ways. Converting between date formats is a common chore for computers. Following modules in Python's standard library handle date and time related processing −

            DateTime module

            Time module

            Calendar module
        


Funciton

    Defining a Python Function-

    You can define custom functions to provide the required functionality. Here are simple rules to define a function in Python −

        Function blocks begin with the keyword def followed by the function name and parentheses ().

        Any input parameters or arguments should be placed within these parentheses. You can also define parameters inside these parentheses.

        The first statement of a function can be an optional statement; the documentation string of the function or docstring.

        The code block within every function starts with a colon (:) and is indented.

        The statement return [expression] exits a function, optionally passing back an expression to the caller. A return statement with no arguments is the same as return None.



        In programming languages like C and C++, there are two main ways to pass variables to a function, which are Call by Value and Call by Reference (also known as pass by reference and pass by value). However, the way we pass variables to functions in Python differs from others.

            call by value − When a variable is passed to a function while calling, the value of actual arguments is copied to the variables representing the formal arguments. Thus, any changes in formal arguments does not get reflected in the actual argument. This way of passing variable is known as call by value.

            call by reference − In this way of passing variable, a reference to the object in memory is passed. Both the formal arguments and the actual arguments (variables in the calling code) refer to the same object. Hence, any changes in formal arguments does get reflected in the actual argument.