import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className=' blogs-container'>
            <h2 className='text-center text-success'>Our blogs </h2>

            <div className='blog'>
                <h4>Difference between javascript and nodejs?</h4>
                <p className='text-success'>Author: Imran Ahmed  * Content Write: May-2022</p>
                <p><strong>1. Node Js:</strong>
                    <br />
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                </p>
                <p><strong>2. Javascript:</strong>
                    <br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
            </div>
            <div className='blog'>
                <h4>When should you use nodejs and when should you use mongodb ?</h4>
                <p className='text-success'>Author: Imran ahmed -2022</p>
                <p>
                    Nodejs is asynchronous and helps to build scalable applications, whereas the most used NoSQL Database Management System is MongoDB. MongoDB usually represents data as the collection of documents rather than tables. This makes it easy for various types of data that can be stored and accessed in the web app using Nodejs. Since it is perfect for frequently changing data, it is mostly used along with Nodejs.
                </p>
            </div>
            <div className='blog'>
                <h4>Differences between sql and nosql databases?</h4>
                <p><small>Writer: Imran Ahmed- 2022</small></p>
                <p>When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. </p>
                <p><strong>The Main Differences: </strong></p>
                <p><strong>1. Type-</strong></p>
                <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>
                <p><strong>2. Language:</strong></p>
                <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.</p>
            </div>
            <div className='blog'>
                <h4>What is the purpose of jwt and how does it work ?</h4>
                <p className='text-success'>Author: Imran ahmed -2022</p>
                <p><strong>What is JWT?</strong></p>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <br />
                <p><strong>How JWT works?</strong></p>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
        </div>
    );
};

export default Blogs;