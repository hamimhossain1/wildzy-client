import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Blog = () => {

    return (
        <div className='lg:w-9/12 w-10/12 mx-auto mt-32'>
            <p className='mt-5 text-center text-2xl md:text-3xl font-bold text-base-300'>Blog Section</p>
            <div className="card mt-10 mb-10 lg:w-7/12  mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">1. Difference between SQL and NoSQL.</h3>
                    <p>Ans: SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. <br></br><br></br>
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
                </div>
            </div>
            <div className="card mt-10 mb-10 lg:w-7/12 mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">2. What is JWT, and how does it work?</h3>
                    <p>Ans: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        <br></br><br></br>
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        <br></br><br></br>
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        <br></br><br></br>

                        Once decoded, you will get two JSON strings:
                        <br></br><br></br>

                        1. The header and the payload.
                        2. The signature.

                        <br></br><br></br>
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                        <br></br><br></br>

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                        <br></br><br></br>

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                        <br></br><br></br>

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </p>
                </div>
            </div>
            <div className="card mt-10 mb-10 lg:w-7/12 mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">3. What is the difference between javascript and NodeJS?</h3>
                    <p>Ans:  JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                        <br></br><br></br>
                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
                        <br></br><br></br>
                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
                        <br></br><br></br>
                        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
                        <br></br><br></br>
                        JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
                        <br></br><br></br>
                        JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
                        


                    </p>
                </div>
            </div>
            <div className="card mt-10 mb-10 lg:w-7/12 mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">4. How does NodeJS handle multiple requests at the same time?</h3>
                    <p>Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    <br></br><br></br>
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;