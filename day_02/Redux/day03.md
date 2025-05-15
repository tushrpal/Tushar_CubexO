React Lifecycle
    Lifecycle of Components
    Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

    The three phases are: Mounting, Updating, and Unmounting.

        1. Mounting – Component is being created and inserted into the DOM.
            Class Components:

            constructor() – Initializes state and binds methods.

            static getDerivedStateFromProps() – Sync state from props (rare).

            render() – Returns JSX to render.

            componentDidMount() – Called after the component is added to the DOM. Ideal for API calls or subscriptions.

            Functional Components:

            useEffect(() => { ... }, []) – Acts like componentDidMount.

        2. Updating – State or props change triggers re-render.
            Class Components:

            static getDerivedStateFromProps() – Called on updates too.

            shouldComponentUpdate() – Control re-render for optimization.

            render() – Re-renders JSX.

            componentDidUpdate(prevProps, prevState) – Ideal for reacting to prop or state changes.

            Functional Components:

            useEffect(() => { ... }, [dependencies]) – Runs when dependencies change.

        3. Unmounting – Component is being removed from the DOM.
            Class Components:

            componentWillUnmount() – Cleanup (e.g., remove listeners, cancel timers).

            Functional Components:

            useEffect(() => { return () => { ... }; }, []) – Cleanup function runs on unmount.


        🌟 Importance of React Lifecycle

            Purpose	Why It's Important
                Data Fetching-	Use componentDidMount or useEffect to fetch API data when a component loads.
                Performance Optimization-	shouldComponentUpdate helps skip unnecessary renders.
                Cleanup-	Prevent memory leaks by cleaning timers, subscriptions in componentWillUnmount.
                Side Effects Handling-	Perform actions after DOM update (e.g., animations, logging, setting timers).
                Dynamic UI Updates-	Respond to prop or state changes for interactive components.


Context Api
    The Context API in React is a way to pass data deeply through the component tree without having to pass props manually at every level.

    It helps in "avoiding prop drilling" — a situation where you pass data through many nested components even if only one of them needs it.
    
    When to Use Context API
        Managing global states like:
        ✅ Authentication info (e.g., current user)
        ✅ Theme (light/dark mode)
        ✅ Language settings
        ✅ Shopping cart data

        When multiple components at different nesting levels need access to the same data.
        When you want to avoid prop drilling.

        ontext API is a built-in tool for managing global/shared state.

        You create a context, wrap components with a provider, and use useContext to access data.

        It simplifies state management for medium-scale apps without needing Redux or external libraries.



Axios

    Axios is a promise-based HTTP client for JavaScript, which is used to make HTTP requests to fetch or send data to a server. It simplifies the process of handling requests by providing a cleaner API, better error handling, and support for features like request/response interceptors, cancellation, and more. It is also fully compatible with modern browsers and can be used in both the browser and NodeJS environments.

    Key Features of Axios
        Promise-based API.
        Works in both NodeJS and browsers.
        Automatically transforms JSON data.
        Supports request and response interceptors.
        Allows easy handling of timeouts and cancellation of requests.
        Supports making GET, POST, PUT, DELETE, and other HTTP requests.

    Handling Errors in Axios
        Error handling is an important part of working with HTTP requests. In the above examples, we used .catch() to handle any errors that occur during the request. However, Axios provides several ways to manage errors more efficiently:

        Error Object: Axios provides an error object containing useful information such as the response status, error message, and more. We can access it like this:


        axios
            .get("https://jsonplaceholder.typicode.com/invalid-endpoint")
            .catch((error) => {
                if (error.response) {
                    // Server responded with a status other than 2xx
                    console.log("Response error:", error.response);
                } else if (error.request) {
                    // No response was received
                    console.log("Request error:", error.request);
                } else {
                    // Something went wrong setting up the request
                    console.log("Error:", error.message);
                }
            });  
    Best Practices for Using Axios in React              
        Use Axios with async/await: For cleaner code, consider using async/await with Axios.

            const fetchData = async () => {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                    setData(response.data);
                } catch (error) {
                    setError(error.message);
                }
            };
        Use Axios Instances: For scalability and easier configuration, you can create Axios instances that can be reused across components.

            const axiosInstance = axios.create({
                baseURL: "https://jsonplaceholder.typicode.com",
                timeout: 1000,
            });

            axiosInstance
                .get("/posts")
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        Handle Loading States: Always handle loading and error states in your UI so users have feedback while waiting for data.
    
    Response Objects in Axios
        When you send a request to the server, you receive a response object from the server with the properties given below…

        data: You receive data from the server in payload form. This data is returned in JSON form and parse back into a JavaScript object to you.
        status: You get the HTTP code returned from the server.
        statusText: HTTP status message returned by the server.
        headers: All the headers are sent back by the server.
        config: original request configuration.
        request: actual XMLHttpRequest object.
        
        
    Error Object
        You will get an error object if there will be a problem with the request. Promise will be rejected with an error object with the properties given

        message: Error message text. 
        response: Response object (if received). 
        request: Actual XMLHttpRequest object (when running in a browser). 
        config: Original request configuration. 