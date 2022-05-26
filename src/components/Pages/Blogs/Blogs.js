import React from "react"

const Blogs = () => {
  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="">
        <div>
          <h1 className="text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-gray-500 text-center cursor-pointe">
            Basic Questions
          </h1>
          <p className="mt-10 mb-3 font-semibold text-md lg:text-2xl text-amber-800">
            🙋.How will you improve the performance of a React Application?
          </p>
          <p className=" lg:text-lg text-sm  font-semibold text-cyan-700">
            React applications, are guaranteed a very fast UI by default.
            However, as an application grows, developers may encounter some
            performance issues. keeping the component state local for a better
            user experience where it is necessary. I memorized the
            react components in order to avoid unnecessary re-rendering for the
            project. Delete the code if it is necessary and use react dynamic
            import (). Windowing and list virtualization are critical in React.
            The most important task is to load images into the project.
            Understanding how React updates the UI, as well as the React
            pre-optimizing technique, is critical. Using the React app to
            determine the location of the bottle snack React performance
            optimization techniques are important. For these reasons, we update
            our app performance.
          </p>
          <div className="my-16">
            <p className="mt-10 mb-3 font-semibold text-md lg:text-2xl text-amber-800">
              🙋.What are the different ways to manage a state in a React
              application?
            </p>
            <p className="lg:text-lg text-sm  font-semibold text-cyan-700">
              In the react app, four kinds of react states are used the
              necessary local state, global state, server state, and URL state.
              In the local UI state, it is a state dataset that we manage one or
              another component. It is most often managed in React by using the
              useState hook. It shows the value only in the other input state.
              "Global state" is data that we manage across multiple components.
              A global state is necessary when we want to get or update the data
              any where or the multicomponats in the app.The global state
              authenticates the user's state if the user is logged into the app
              and changes the data from the application. Server state is that
              kind of data that comes from the external server and must be
              integrated with our UI state. URL data that exists in the urls
              includes the path name and query parameters. We use the useState
              and useReducer functions to manage the local state. In the global
              state managed time, we use useReducer and useContext. In the
              server state, we managed its useEffect and useState. In the URL
              state, we managed it with useHistory and useLocation.
            </p>
          </div>

          <div className="my-16">
            <p className="mt-10 mb-3 text-md lg:text-2xl font-semibold text-amber-800">
              🙋.How does prototypical inheritance work?
            </p>
            <p className="lg:text-lg text-sm  font-semibold text-cyan-700">
              The prototype is a very useful thing for objects and methods in
              modern JavaScript because it can be shared, extended, and copied.
              In their prototype relationship, if the two users are in
              connection with each other, they can share the object in the same
              way if it is necessary for the project. In proto-type inheriting
              methods, if the user is inherited in any other secreted values, it
              will shard the value and create a new value or data for the
              necessary project as needed. Three-tier inheritance and
              scalability are the same types of two in the prototype; they
              inherit each other to create new data and access the value-sharing
              process at that time, and it works properly for the three tiers.
              and prototypical inheritance is used in web application frameworks
              to allow the sharing of common behavior and state among similar
              components.
            </p>
          </div>

          <div className="my-16">
            <p className="mt-10 mb-3 font-semibold text-md lg:text-2xl text-amber-800">
              🙋.You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </p>
            <p className="lg:text-lg text-sm  font-semibold text-cyan-700 pb-12">
              Firstly, I create a data.json file that contains all the products'
              data. Then fetch the data with the fetch URL and get the data in a
              products array using useState to store the data in the<span className="text-amber-600">[products,
              setProducts()] = useState([])</span> . Then map the products and have one
              product with all the individual information. Then create a
              handelSearch for the search field and <span className="text-amber-600">[searchField,
              setSearchField] = useState ("")</span> . Then they filtered the product
              like<span className="text-amber-600">product.name.toLowerCase().includes
              (searchField.toLowerCase())</span>. Then, in a handelSearch, pass the
              event as <span className="text-amber-600"> setSearchField (e.target.value)</span>. If the value is matched,
              then get the product from the data or give a toast error like the
              product is not available.
            </p>
          </div>
          <div className="my-8">
            <p className="mt-10 mb-3 font-semibold text-md lg:text-2xl text-amber-800">
              🙋.What is a unit test? Why should write unit tests?
            </p>
            <p className="lg:text-lg text-sm font-semibold text-cyan-700 pb-12">
              <span className="pb-12">
                It is a type of software testing where individual units or
                components of the software are tested. It isolates a section of
                code and verifies its correctness. A unit is an individual
                function, method, procedure, module, or object. It is important
                because software developers sometimes try to save time by doing
                minimal unit testing, and this is a myth because inappropriate
                unit testing leads to high-cost defect fixing during system
                testing, integration testing, and even beta testing after the
                application is built. If proper unit testing is done in early
                development, then it saves time and money in the end. It's first
                integration testing, then system testing, and last acceptance
                testing.
              </span>
            </p>
            <p className="lg:text-lg text-sm font-semibold text-cyan-700 pb-12">
              <span>
                The main objective of unit testing is to ensure that each
                individual part is working well and as it was supposed to work.
                Firstly, create the test case, then review, then baseline, and
                finally execute the test. The benefit of testing is that the
                process becomes more agile. That means adding some new It helps
                to mark out the changes in the path. That helps to save time. It
                can also check the quality of codes, which can help to improve
                the quality of codes. It helps when changing the code in the
                library to detect the changes. It simplifies the debugging
                process because if the test fails, it stores the main code. It
                helps the design to improve the change. It lowers the cost of
                simplification of changes or updating the code or app.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
