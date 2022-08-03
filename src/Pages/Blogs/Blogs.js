import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:mx-[90px]'>
            <div className="border-2 py-[10px] px-[5px] mt-[20px] text-center section-title">
                <div>
                    <span className='text-xl lg:text-2xl'>Everything about React Application and JavaScript</span>
                </div>
            </div>
            <div className='section-title mt-[30px] text-justify'>
                <div className='mb-[30px]'>
                    <h1 className='text-xl'>1.How will you improve the performance of a React Application?</h1>
                    <p className='text-[18px] mt-[10px]'>Ans: There are many ways to improve the performance of a React application.Among them some of these are:</p>
                    <ul className='ml-[28px]'>
                        <li>1. Using a CDN is a great way to deliver static content from my website to my user more quickly and efficiently</li>
                        <li>2. I will memoize react components for prevent unnecessary re-renders</li>
                        <li>3. For map an array  i will avoid to use index as a key.</li>
                        <li>4. For better performance i will use production mode flag in webpack.</li>
                        <li>5. Where necessary i will Keep component state local </li>
                    </ul>
                </div>
                <div className='mb-[30px]'>
                    <h1 className='text-xl'>2.What are the different ways to manage a state in a React application?</h1>
                    <p className='text-[18px] mt-[10px]'>Ans: We have many ways to manage a state in a react application.Among them there are four main types of states i need to manage in my react app:</p>
                    <ul className='ml-[28px]'>
                        <li>1. Global state- is data we manage across different components.</li>
                        <li>2. Local state- is data we can manage in 1 or another component.</li>
                        <li>3. URL state- is data that exists on our urls, including the query parameters and pathname .</li>
                        <li>4. Server state-  data that comes from an external server which must be integrated with our Ui state.</li>
                    </ul>
                </div>
                <div className='mb-[30px]'>
                    <h1 className='text-xl'>3.How does prototypical inheritance work?</h1>
                    <p className='text-[18px] mt-[10px]'>Ans: Every object of javascript with its properties and methods contains an internal and hidden property known as [[Prototype]]. In javascript use of add methods and properties in objects is called prototypal inheritance.From another object, an object can inherit the properties and methods by prototypical inheritance.To get and set the [[Prototype]] of an object, we use Object.setPrototypeOf and Object.getPrototypeOf.In recent times, in modern language it is set  by using __proto__. </p>
                </div>
                <div className='mb-[30px]'>
                    <h1 className='text-xl'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className='text-[18px] mt-[10px]'>Ans: At first i will declare a function with two parameters(one for receive the  array of products and the another for name as searchText).Then inside the function i will declare a empty array.After that i will  run a (for of ) loop to get individual product.Inside of loop i use condition( if( product.name.includes(searchText) ) ).Inside the condition i push the product which full fill the condition   to empty array.Then outside the loop i will return the array that i declared inside the function.Outside the function i will call the function with the (array of products and searchText).  </p>
                </div>
                <div className='mb-[30px]'>
                    <h1 className='text-xl'>5. What is a unit test? Why should write unit tests?</h1>
                    <p className='text-[18px] mt-[10px]'>Ans:Where components or individual units of a software are tested  is called unit test which is a type of software testing . To isolate written code to determine and test if it works properly ,we can use unit test.We should write unit tests for some advantages.Some of these are:</p>
                    <ul className='ml-[28px]'>
                        <li>1. By using unit test developers can easily and quickly make changes to the code base.</li>
                        <li>2. Using unit test we can make debugging processes more easier.</li>
                        <li>3. For re-use code, migrating it to new projects we should use unit test.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;