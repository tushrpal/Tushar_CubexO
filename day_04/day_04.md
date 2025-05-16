React Hooks
===========
    Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
    
    Hook Rules
        There are 3 rules for hooks:

        Hooks can only be called inside React function components.
        Hooks can only be called at the top level of a component.
        Hooks cannot be conditional


    
        useState
        
            Initialize useState
            We initialize our state by calling useState in our function component.

            useState accepts an initial state and returns two values:

            The current state.
            A function that updates the state.

            EX
                import { useState } from "react";

                function FavoriteColor() {
                const [color, setColor] = useState("");
                }

            The first value, color, is our current state.

            The second value, setColor, is the function that is used to update our state.

        
        useEffect
            
            The useEffect Hook allows you to perform side effects in your components.
            Some examples of side effects are: fetching data, directly updating the DOM, and timers.
            useEffect accepts two arguments. The second argument is optional.

            useEffect(<function>, <dependency>)
            

            Example
                1. No dependency passed:

                    useEffect(() => {
                    //Runs on every render
                    });
                
                2. An empty array:

                    useEffect(() => {
                    //Runs only on the first render
                    }, []);
                
                3. Props or state values:

                    useEffect(() => {
                    //Runs on the first render
                    //And any time any dependency value changes
                    }, [prop, state]);


        useContext

            React Context is a way to manage state globally.
            It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

            Create Context
            To create context, you must Import createContext and initialize it:

                import { useState, createContext } from "react";
                import ReactDOM from "react-dom/client";

                const UserContext = createContext()
                Next we'll use the Context Provider to wrap the tree of components that need the state Context.

            Context Provider
            Wrap child components in the Context Provider and supply the state value.

                function Component1() {
                const [user, setUser] = useState("Jesse Hall");

                return (
                    <UserContext.Provider value={user}>
                    <h1>{`Hello ${user}!`}</h1>
                    <Component2 user={user} />
                    </UserContext.Provider>
                );
                }
            
            Now, all components in this tree will have access to the user Context.
        
        useRef

            The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.
            It can be used to access a DOM element directly.

            Does Not Cause Re-renders
                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                To avoid this, we can use the useRef Hook.

            
                    function App() {
                    const [inputValue, setInputValue] = useState("");
                    const count = useRef(0);

                    useEffect(() => {
                        count.current = count.current + 1;
                    });

                    return (
                        <>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <h1>Render Count: {count.current}</h1>
                        </>
                    );
                    }

        useReducer

            The useReducer hook in React is a way to manage complex state logic in a simpler and more organized way — especially when you have multiple related state values or when the next state depends on the previous one.

            useState is great for simple cases.

            useReducer is better when:
            State has multiple values.
            You need to update state based on actions.
            State updates are more predictable using a single function (a reducer).

            Basic structure of useReducer

                    const [state, dispatch] = useReducer(reducerFunction, initialState);
           
            state = current state.
            dispatch(action) = sends an action to update the state.
            reducerFunction = decides how to update the state.
            initialState = the default state.

            useReducer is like a state manager.
            You tell it what action happened (dispatch), and it knows how to change the state.
            It's more organized than using multiple useStates when your state logic is more complex or related.


        useCallback
            
            The React useCallback Hook returns a memoized callback function.
            Think of memoization as caching a value so that it does not need to be recalculated.
            This allows us to isolate resource intensive functions so that they will not automatically run on every render.
            The useCallback Hook only runs when one of its dependencies update.
            This can improve performance.
            The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.


            "referential equality"-
            Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.


            EX-
                const addTodo = useCallback(() => {
                    setTodos((t) => [...t, "New Todo"]);
                }, [todos]);


        useMemo

            The React useMemo Hook returns a memoized value.
            Think of memoization as caching a value so that it does not need to be recalculated.
            The useMemo Hook only runs when one of its dependencies update.
            This can improve performance.
            The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

            The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
            In this example, we have an expensive function that runs on every render.
            When changing the count or adding a todo, you will notice a delay in execution.


            EX-
            The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
            In the following example, the expensive function will only run when count is changed and not when todo's are added.

            const calculation = useMemo(() => expensiveCalculation(count), [count]);


        CUSTOM HOOKS

            Hooks are reusable functions.
            When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
            Custom Hooks start with "use". Example: useFetch.

            EX-
            import { useState, useEffect } from "react";

            const useFetch = (url) => {
            const [data, setData] = useState(null);

            useEffect(() => {
                fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data));
            }, [url]);

            return [data];
            };

            export default useFetch;



API Integration

    An Application Programming Interface or an API is a set of definitions and protocols through which applications communicate with each other. With API your application or service can use the functions provided by another application without needing to know how that other application is being implemented. APIs can also serve as an intermediary layer for data transfers between system applications, allowing businesses to open their application data and functionality to third-party developers, business partners, as well as internal departments within their organizations. 


    API integration and its importance
        The process of connecting two or more software applications or processes using APIs is referred to as API integration. This allows the systems to exchange data and functionality, allowing them to work in unison. APIs are a collection of protocols, routines, and tools used to create software and applications. APIs allow for communication between different applications specifying how the software components should interact with each other.

        API integration is required for businesses to connect their systems and services to other external applications, allowing them to exchange data and functionality in real time. This improves efficiency, scalability, and user experience while potentially saving money. Businesses can use API integration to automate tasks and integrate new systems and services, creating new opportunities for innovation and growth. Without API integration, businesses would have to rely on manual processes and custom development, which can be costly, time-consuming, and less efficient.

        Depending on one's need, API integration can be achieved in quite different ways, but it majorly revolves around the following-

        1. Custom Integration
            It is the process of connecting one application or service to another via a custom-built API. Custom integration can be created when an existing API is not available or does not meet the specific needs of the integration. This entails developing a new API that allows data and functionality to be exchanged between systems or services. These integrations can be built in a variety of programming languages, such as Python(Build a REST API using Flask) or JavaScript (REST API in Node.js), and can be tailored to specific needs and constraints.

        2. Connector Applications
            It is the process of utilizing third-party software to connect various systems and services via APIs. These connector applications, also known as middleware, frequently come with preconfigured tools for popular systems and services and act as a bridge between the systems and services, allowing data and functionality to be exchanged. A connector application, for example, can be used to integrate social media platforms such as Instagram with an analytics tool, allowing for the automatic collection of social media data such as follower counts and the analysis of this data in the analytics tool.

        3. Integration Platforms
            Integration platforms also referred to as iPaaS (integration platform as a service), offer a centralized environment for developing, deploying, and managing integrations. They usually include pre-built connectors for popular systems and services, as well as tools for developing custom connectors and workflows. They support a wide range of integration scenarios, such as real-time data synchronization, batch data processing, and the creation and execution of complex business processes. They can also include features like monitoring and analytics, security, and error handling. Examples of Integration Platforms include Mulesoft and Jitterbit.


REST API

    REST API stands for REpresentational State Transfer API. It is a type of API (Application Programming Interface) that allows communication between different systems over the internet. REST APIs work by sending requests and receiving responses, typically in JSON format, between the client and server.

    REST APIs use HTTP methods (such as GET, POST, PUT, DELETE) to define actions that can be performed on resources. These methods align with CRUD (Create, Read, Update, Delete) operations, which are used to manipulate resources over the web.

    A request is sent from the client to the server via a web URL, using one of the HTTP methods. The server then responds with the requested resource, which could be HTML, XML, Image, or JSON, with JSON being the most commonly used format for modern web services.

    Key Features of REST APIs
        Stateless: Each request from a client to a server must contain all the information the server needs to fulfill the request. No session state is stored on the server.
        Client-Server Architecture: RESTful APIs are based on a client-server model, where the client and server operate independently, allowing scalability.
        Cacheable: Responses from the server can be explicitly marked as cacheable or non-cacheable to improve performance.
        Uniform Interface: REST APIs follow a set of conventions and constraints, such as consistent URL paths, standardized HTTP methods, and status codes, to ensure smooth communication.
        Layered System: REST APIs can be deployed on multiple layers, which helps with scalability and security.

Next.js overview

    Next.js is a popular React framework that extends React's capabilities by providing powerful tools for server-side rendering, static site generation, and full-stack development. It is widely used to build SEO-friendly, high-performance web applications easily.

        Built on React for easy development of front-end applications.
        
        Provides server-side rendering (SSR) and static site generation (SSG).
        
        It comes with built-in CSS and JavaScript bundling for performance.
        
        Highly scalable and SEO-friendly for modern web applications.


    Next.js offers several advantages over traditional React development:

    Built-in Routing and SSR: Unlike React, which lacks native routing, Next.js provides seamless routing functionality out of the box. Additionally, it supports server-side rendering, improving performance and SEO.
    Faster Development: Next.js accelerates development by offering built-in features and conventions. Developers can focus on building features rather than configuring complex setups.
    SEO Optimization: Next.js enhances SEO by addressing slow rendering and loading times associated with client-side rendering. Its SSR capabilities ensure that search engines can efficiently crawl and index your content.