---
title: Working with promises in Javascript
tags: [ javascript, typescript, nodejs, reactjs ]
date: 2020-04-20T05:25:44.226Z
path: blog/promises-in-javascript
cover: ./javascript.png
excerpt: Let's talk about promises in javascript. What exactly is a promise in javascript and how to handle promises. This article will talk about the different methods to resolve promises.  
---

Promises in `Javascript` is a very interesting topic and a bit complicated topic as well. Many a time we come across promises but we fail to identify them. Promises are very common in `Javascript` programming.

## So what are promises in Javascript ?

So a `Promise` is an object that represents an eventual completion or failure of an asynchronous operation and its resulting value. Which means promises return some value after a particular interval of time. The value can either be a success value or a failure value.

So let's consider the below code

```javascript
    let promiseObj = new Promise(()=> 'some promise');

    console.log(promiseObj);

    /**
    * the output will be Promise {<pending>} not 'some promise'
    */
```

A promise can be any of the below three states at a point of time:

1. **pending** - The initial state when a promise is created.
2. **fulfilled** - The state when the promise is executed successfully.
3. **rejected** - The state when a promise fails due to some error or some condition.

```javascript
    const promise = new Promise((resolve, reject) => { 
        try{
            setTimeout(() => { 
                resolve('resolved promise'); 
            }, 5000); 
        }
        catch (e) {
            reject(e)
        }
    }); 

    // this will print - 'resolved promise'
    promise.then((val) => console.log(val))
```
The setTimeout function in the above code will be executed after 5 seconds. So the promise will settle after 5 seconds. Hence we can say that the promise will be resolved after 5 seconds. After that  ` promise.then((val) => console.log(val))` block will be executed and will return the output `resolved promise`.

The `Promise` object takes in executor function as a parameter. 

```javascript
    new Promise(executor_function)
```

The executor function has two parameters again `resolve` or `reject`. Let's say you want to settle the promise with a success value then you do it with the `resolve` method, which is the first parameter to the executor method. If you want to settle a promise with a failure value then you use the reject method, which is the second parameter to the executor method.

```javascript
    new Promise((resolve , reject)=>{
        try{
            resolve(/** resolve some suceess way over here */)

        }catch (err){
            /** reject if some error occured */
            reject(err)

        }
    })
```

## Promise methods 

1. ### Promise.all()

    `Promise.all()` method accepts an array as a parameter. `Promise.all()` waits for all the `Promises` in the array passed to either be resolved or rejected and returns the new array of resolved promises.

    ```javascript
        const promise1 = Promise.resolve(32);
        const promise2 = 1234;
        const promise3 = new Promise((resolve, reject)=>{
            setTimeout(()=> 'resolve something',2000)
        })

        Promise.all([promise1, promise2, promise3 ]).then(
            /** 
            * will console the values after 2 seconds
            * [32, 1234, 'resolve something']
            */
            val => console.log(val)
        )

    ```

    The problem with `Promise.all` is, suppose that one promise fails or gets rejected then the entire chain of promises fails, throwing the respective error. Hence you need to be careful while performing `Promise.all`.
    The advantage of `Promise.all` is it can perform concurrent tasks. But we need to make sure that none of the promises in the array fail.

2. ### Promise.allSettled()

    `Promise.allSettled` takes an array as a parameter and waits for all the promises to settle. The settled promise can either be a rejected or resolved value. Once the promises are settled it returns an array of settled promises. For a resolved promise the return object will have the status field as fulfilled and value field as the resolved value of that promise. For a rejected promise the return object will have the status field as rejected and instead of value field it will have a reason field with the reason for the promise to get rejected.

    ```javascript

        const promise1 = Promise.resolve('resolved value');
        const promise2 = 23;
        const promise3 = new Promise(function(resolve, reject) {
            setTimeout(reject, 100, 'i will be rejected');
        });

        Promise.allSettled([promise1, promise2, promise3]).then(function(values) {
            console.log(values);
        });

    /**
    *
    * output for the above code:
    *
    * Array [   Object { status: "fulfilled", value: 'resolved value' }, 
    *           Object { status: "fulfilled", value: 23 }, 
    *           Object { status: "rejected", reason: "i will be rejected" }
    *       ]
    *
    */

    ```

3. ### Promise.race()

    `Promise.race` accepts an array as a parameter and returns the value of the first settled promise. The settled promise may either be resolved or rejected. If it is rejected, it is rejected with the reason from the first promise that was rejected.


    ```javascript

        const promiseMeApple = new Promise(function(resolve, reject) {
            setTimeout(resolve, 100, `🍎`);
        });

        const promiseMeGrapes = new Promise(function(resolve, reject) {
            setTimeout(resolve, 300, `🍇`);
        });

        Promise.race([promiseMeApple, promiseMeGrapes]).then(function(value) {
            //resolved value 
            console.log(value);
        });
        // expected output: "🍎"
    ```

4. ### Promise.resolve()

    `Promise.resolve` accepts a value to be returned by the new `Promise` as a parameter and return the new `Promise` with the resolved value.
    
    ```javascript

        let melonPromise = Promise.resolve(`🍉`);

        /** will console log : [object Promise] */
        console.log(melonPromise);

        /**
        * if u want to console the value of promise then use a callback
        *
        * This will print 🍉 as output
        */
        melonPromise.then(val => console.log(val));   

    ```

5. ### Promise.reject()

    `Promise.reject` accepts the reason for the promise to be rejected as a parameter and return a rejected promise with the reason.

    ```javascript

        let tomatoPromise = Promise.reject(`I don't like Tomatos 🍅 `);

        /** will console log : Promise {<rejected>: "I don't like Tomatos 🍅 "} */
        console.log(tomatoPromise);

        /**
        * if u want to console the value of promise then use a callback
        *
        * This will print 
        *
        * : Uncaught (in promise) I don't like Tomatos 🍅 
        *
        * as output
        */
        tomatoPromise.then(val => console.log(val));   

    ```
    
## Application of promises

The main advantage of promises is performing tasks concurrently. With promises we can perform tasks concurrently which will reduce the time significantly.

Let's consider making an API call using `async await` . 

```javascript

    async function performingTwoApiCalls (){
        const burgerData = await fetch('/get-api-call-for-burget-data');
        const pizzaData  = await fetch('/get-api-call-for-pizza-data');

        /**
         * 
         * some processing with the above data
         * 
         */
        const combineBurgerAndPizzaData = [...burgerData, ...pizzaData];
    }
```

If we look at the above example the second API call has to wait for the first API call to finish. A better way of doing this using `Promises` is

```javascript

    function performingTwoApiCalls (){
        const burgerPromise = Promise.resolve(fetch('/get-api-call-for-burget-data'));
        const pizzaPromise  = Promise.resolve(fetch('/get-api-call-for-pizza-data'));

        Promise.all([ burgerPromise , pizzaPromise ])
                .then((val)=>{
                    const burgerData = val[0];
                    const pizzaData  = val[1];

                    const combineBurgerAndPizzaData = [...burgerData, ...pizzaData];
                })

    }
```

In the above example, the two API calls are performed asynchronously using the `Promise.all` method and the resolved values are extracted for further processing.
