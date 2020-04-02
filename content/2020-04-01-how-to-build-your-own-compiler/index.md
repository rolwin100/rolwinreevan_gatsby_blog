---
title: How to build your own compiler ? ( The Worlds smallest compiler )
tags: [ javascript ]
date: 2020-04-01T05:25:44.226Z
path: blog/how-to-build-your-own-compiler
cover: ./compiler.png
excerpt: Compilers are there everywhere in our day to day use. Most developers tend to ignore it because they feel only the nerdiest of the geeks can code it. Let's build the worlds smallest compiler to understand how compilers work.
---

Today we are going to write a compiler together this compiler is going to be the smallest compiler in the world. Since it's going to be a long article you can skip directly to the [code](https://github.com/rolwin100/mini_compiler_demo) if you can't wait 😅.

Compilers are there everywhere, right from the point you switch ON your machine till you surf the web or open any application. So why do many developers tend to give less importance to it and don't have much knowledge on how it works 🤔. Probably they think compilers are too scary 👻 and only the nerdiest of the geeks 🤓 can work on it. But that not true. Compilers are quite simple. It's just that they involve a little understanding.

Before jumping into what is a compiler and how compilers work. I'll explain what we are going to do in this article. We are going to write a code to compile a [`LISP`](https://en.wikipedia.org/wiki/Lisp_(programming_language)) like function calls into C-like function calls. For those of you who don't know what is LISP, it's just a very old programming language like Fortran.

For example if we have two functions `add` and `subtract` they would be written like this in LISP and C.

|                 | LISP                     | C                       |
| --              | --                       | --                      |
| **2 + 2**       | `(add 2 2)`              | `add(2, 2)`             |
| **4 - 2**       | `(subtract 4 2)`         | `subtract(4, 2)`        |
| **2 + (4 - 2)** | `(add 2 (subtract 4 2))` | `add(2, subtract(4, 2))`|

##
Easy-pezzy right? 

OK good!! we will be using the above example as the input for our compiler.

## So what the hell is a compiler ? you may be asking ! 😂

So the compiler is a tool that just converts code from one programming language into another programming language without changing the actual meaning of the code. There is also something called a transpiler you may have come across while building JS application with typescript. A transpiler is also a compiler. So the difference between a compiler and a transpiler is that compiler converts code from a programming language to byte codes which humans can't understand. Whereas a transpiler is a source-to-source compiler i.e it converts code from one language to another and the compiled code is still human-readable.


## stages in a compiler 

Most of the compilers have three stages on a high level design i.e `Parsing`, `Transformation` and `Code Generation`.

1. `Parsing` is basically taking the code we are about to compile and turning it into an abstract representation.
2. `Transformation` is taking the output from the parsing stage and do whatever changes the compiler wants to do for the abstract representation.
3. `Code Generation` takes the output of transformation stage and converts it to the new Code.

Thats it these are the three main stages of a compiler. 😃

1. ### Parsing
    Again parsing can be broken down into two phases `Lexical Analysis` and `Syntactic Analysis`.

    `Lexical Analysis` takes the raw code and splits into token with the help of tokenizer also called as the lexer.

    For the following code

    ```
    (add 2 (subtract 4 2))
    ```
    The below token structure will be generated

    ```
    [
        { type: 'paren',  value: '('        },
        { type: 'name',   value: 'add'      },
        { type: 'number', value: '2'        },
        { type: 'paren',  value: '('        },
        { type: 'name',   value: 'subtract' },
        { type: 'number', value: '4'        },
        { type: 'number', value: '2'        },
        { type: 'paren',  value: ')'        },
        { type: 'paren',  value: ')'        },
    ]
    ```

    Below is the code of how a tokenizer generates the tokens.

    ```javascript
    /**
     * ============================================================================
    *                                   (/^▽^)/
    *                                THE TOKENIZER!
    * ============================================================================
    */

    /**
    * the tokenizer is going to take the code and covert it to an array of tokens
    *
    * (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, { type: 'name', value: 'add'} ...]
    */
    function tokenizer(input) {

    // Let's keep a variable called current that will be used as a cursor.
    let current = 0;

    // Token array for inserting the tokens.
    let tokens = [];


    while (current < input.length) {

        // Take the current character
        let char = input[current];

        // The first thing we want to check for is an open parenthesis. This will 
        // later we will use this for `CallExpression`. As of now we will only take care
        // of the character. if we come across one we push them in the token array with type
        if (char === '(') {
            tokens.push({ type: 'paren', value: '(' });

            // Then we increment `current` and continue to the next cycle of the loop
            current++;
            continue;
        }

        // Next we're going to check for a closing parenthesis. We do the same exact
        // thing as before.
        if (char === ')') {
            tokens.push({ type: 'paren',value: ')', });
            current++;
            continue;
        }

        // Let's check for whitespaces. We need them because whitespace exists to 
        // separate characters, but it isn't actually important for us to store as a token.
        // We would only throw it out later.
        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        // Next let us take care of number tokens. It's a bit different because a number can 
        // have a continuous sequence and we need to  capture the entire sequence of characters
        // as one token.
        //
        //   (add 123 456)
        //        ^^^ ^^^
        //        Only two separate tokens
        //
        // So we start this off when we encounter the first number in a sequence.
        let NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            // We're going to create a `value` string that we are going to push
            // characters to.
            let value = '';

            // Loop through the characters in the sequence until we encounter a character that 
            // is not a number. Push each character that is a number to our `value` and 
            // incrementing `current` as we go.
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({ type: 'number', value });
            continue;
        }

        // So what about strings then we need to parse the strings as well right. So how do we 
        // do it 🤷‍♀️. You guessed it right we need to look for the start and end of a double quote.
        //
        //   (concat "foo" "bar")
        //            ^^^   ^^^ string tokens
        //
        // The same logic can be applied which we used for numbers numberWe'll start by 
        // checking for the opening quote:
        if (char === '"') {
            // value variable to insert the characters to form the string.
            let value = '';
            char = input[++current];

            while (char !== '"') {
                value += char;
                char = input[++current];
            }

            char = input[++current];
            tokens.push({ type: 'string', value });
            continue;
        }

        // Lastly let's take care of the `name token`. Names are sequence of letters,
        // that are the names of functions in our lisp syntax.
        //
        //   (add 2 4)
        //    ^^^
        //    Name token
        //
        let LETTERS = /[a-z]/i;
        if (LETTERS.test(char)) {
            let value = '';

            // Again we're just going to loop through all the letters pushing them to
            // a value.
            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }
            
            tokens.push({ type: 'name', value });
            continue;
        }

        // Finally if we have not matched any characters then let's throw the below error
        // and completely exit.
        throw new TypeError('I\'m not really sure what this character is : ' + char);
    }

    // Then at the end of our `tokenizer` we simply return the tokens array.
    return tokens;
    }

    // export the tokenizer module final compiler...
    module.exports = tokenizer;
    ```

    `Syntactic Analysis` takes the token and reformats them into a tree-like structure called `Abstract Syntax Tree or AST` that describes the token's relationship with one another. This is also called as Intermediate representation or AST.

    Below is what an AST looks like

    ```
    {
        type: 'Program',
        body: [{
            type: 'CallExpression',
            name: 'add',
            params: [{
                type: 'NumberLiteral',
                value: '2',
                }, {
                type: 'CallExpression',
                name: 'subtract',
                params: [{
                    type: 'NumberLiteral',
                    value: '4',
                }, {
                    type: 'NumberLiteral',
                    value: '2',
                }]
            }]
        }]
    }
    ```

    The code below is how the parser generates the `AST` by taking the output from the tokenizer as input.

    ```javascript
    /**
     * ============================================================================
    *                                 ヽ/❀o ل͜ o\ﾉ
    *                                THE PARSER!!!
    * ============================================================================
    */

    /**
    * For our parser take the token array from the output of tokenizer and tranform it to AST
    *
    *   [{ type: 'paren', value: '(' }, { type:'name', value: 'add'} ...]   =>   { type: 'Program', body: [...] }
    */

    // Let's start by defining a function called parser that accepts an array of token
    function parser(tokens) {

        // Let's keep a variable called current that will be used as a cursor.
        let current = 0;

        // But this time we're going to use recursion instead of a `while` loop. So we
        // define a `walk` function.
        function walk() {

            // Inside this function let's start by taking the value of the current token
            let token = tokens[current];

            // Let's spilt the each type of token into different nodes
            // starting off with `number` tokens.
            //
            // We test to see if we have a `number` token.
            if (token.type === 'number') {
                // If we have one, we'll increment `current`.
                current++;

                // Return a new AST node called `NumberLiteral` and set value to the 
                // value of our token.
                return { type: 'NumberLiteral', value: token.value };
            }

            // Again let's do the same for a `StringLiteral` node.
            if (token.type === 'string') {
                current++;

                return { type: 'StringLiteral', value: token.value };
            }

            // Next we're going to look for CallExpressions. We start this off when we
            // encounter an open parenthesis.
            if ( token.type === 'paren' && token.value === '(' ) {

                // We'll increment `current` to skip the parenthesis since we don't care
                // about it in our AST.
                token = tokens[++current];

                // we will create a node with the type `CallExpression`, and we're going
                // to set the name as the current token's value since the next token after
                // the open parenthesis is the name of the function.
                let node = {
                    type: 'CallExpression',
                    name: token.value,
                    params: [],
                };

                // We increment `current` *again* to skip the name token.
                token = tokens[++current];

                // Next we would like to add each token as `params` for the `CallExpression` till we
                // encounter a closing params.
                //
                // For this let's make use of Recursion instead of infinitely looping on each result.
                //
                // To explain this let's look at the LISP snippet below which includes multiple paranthesis.
                //
                //   (add 2 (subtract 4 2))
                //
                // The token array will have multiple nested paranthesis as well
                //
                //   [
                //     { type: 'paren',  value: '('        },
                //     { type: 'name',   value: 'add'      },
                //     { type: 'number', value: '2'        },
                //     { type: 'paren',  value: '('        },
                //     { type: 'name',   value: 'subtract' },
                //     { type: 'number', value: '4'        },
                //     { type: 'number', value: '2'        },
                //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
                //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
                //   ]
                //
                // We're going to rely on the nested `walk` function to increment our
                // `current` variable past any nested `CallExpression`.

                // So we create a `while` loop that will continue until it encounters a
                // token with a `type` of `'paren'` and a `value` of a closing
                // parenthesis.
                while (
                    (token.type !== 'paren') ||
                    (token.type === 'paren' && token.value !== ')')
                ) {
                    // we'll call the `walk` function which will return a `node` and we'll
                    // push it into our `node.params`.
                    node.params.push(walk());
                    token = tokens[current];
                }

                // Finally we will increment `current` one last time to skip the closing
                // parenthesis.
                current++;

                // And return the node.
                return node;
            }

            // Again, if we haven't recognized the token type by now we're going to
            // throw an error.
            throw new TypeError(token.type);
        }

        // Now, we're going to create our AST which will have a root which is a
        // `Program` node.
        let ast = {
            type: 'Program',
            body: [],
        };

        // And we're going to kickstart our `walk` function, pushing nodes to our
        // `ast.body` array.
        //
        // The reason we are doing this inside a loop is because our program can have
        // `CallExpression` after one another instead of being nested.
        //
        //   (add 2 2)
        //   (subtract 4 2)
        //
        while (current < tokens.length) {
            ast.body.push(walk());
        }

        // At the end of our parser we'll return the AST.
        return ast;
    }

    // Just exporting our parser to be used in the final compiler...
    module.exports = parser;
    ```

2. ### Transformation

    The next stage of the compiler is the transforamtion stage. In this stage we take the `AST` from the previous step and do manipulation over it or create a new `AST` from the existing `AST`. It can manipulate the `AST` in the same language or it can translate it to an entirelly different language.

    Now let's start transforming our `AST`.

    If we look at the `AST` closely we have node with a certain property each of these nodes are know as AST node. These nodes define an isolated part of the tree.

    For instance for "NumberLiteral" we have a node.

    ```
    {
        type: 'NumberLiteral',
        value: '2',
    }
    ```

    and if we conider a "CallExpression" then we have the node as

    ```
    {
        type: 'CallExpression',
        name: 'subtract',
        params: [
            // nested nodes 
        ],
    }
    ```

    When we are taversing the `AST` we either add, remove or manipulate the nodes or we can create a new AST from the existing AST.

    Since we are targetting a new language let's create a new AST while keeping the old one as reference.

    * `Traversal`: This process involves visiting all the nodes in the AST with depth-first approach. Comsider the `AST`

    ```
    {
        type: 'Program',
        body: [{
            type: 'CallExpression',
            name: 'add',
            params: [{
            type: 'NumberLiteral',
            value: '2'
            }, {
            type: 'CallExpression',
            name: 'subtract',
            params: [{
                type: 'NumberLiteral',
                value: '4'
            }, {
                type: 'NumberLiteral',
                value: '2'
            }]
            }]
        }]
    }
    ``` 
    So for the `AST` above we would go like:

    1. Program - starting at the top level of the AST
    2. CallExpression (add) - Next let us move to the first node of the program body
    3. NumberLiteral (2) - Going to to the first element of CallExpression's params
    4. CallExpression (subtract) - Going to the second element of CallExpression's params
    5. NumberLiteral (4) - Going to the first element of CallExpression's params
    6. NumberLiteral (2) - Going to the second element of CallExpression's params

    If we are going to manipulate the nodes directly we would likely to introduce lot of scenarios, so we better we visit each nodes.

    * `Vistors`: So visitor is going to be an object that will have methods to handle different node types.

    ```javascript
    var visitor = {
        NumberLiteral() {},
        CallExpression() {},
    };
    ```

    Whenever we find a match with AST node and visitor object type we will call the methods in the visitor object.

    Inorder to make things simple and to keep track of the modified node let's pass the node and reference to the parent node.

    ```javascript
    var visitor = {
        NumberLiteral(node, parent) {},
        CallExpression(node, parent) {},
    };
    ```

    Okk so there is a teeny weeny problem with that structure 😑. Imagine we go down the tree of a node as soon as we finish up at the bottom of that node we may endup calling an exit function which may lead to ignoring of other nodes.

    In order to support this the final form of our visitor should look like.

    ```javascript
    var visitor = {
        NumberLiteral: {
            enter(node, parent) {},
            exit(node, parent) {},
        }
    }; 
    ```

    Looks good now. Now lets write the snippet for our traverser.

    ```javascript
    /**
     * ============================================================================
    *                                 ⌒(❀>◞౪◟<❀)⌒
    *                               THE TRAVERSER!!!
    * ============================================================================
    */

    /**
    * So our traverser function will accept an AST and also a visior node this visitor
    * node method will be used for performing a mapping with the AST nodes.
    *
    *   traverse(ast, {
    *     Program: (node, parent) => {
    *       //do something here
    *     },
    *
    *     CallExpression: (node, parent) => {
    *       //do something here
    *     },
    *
    *     NumberLiteral: (node, parent) => {
    *      //do something here
    *     },
    *   });
    */
    function traverser(ast, visitor) {

        // Iterates over the array and call the next function traverseNode with reference 
        // to the parent.
        function traverseArray(array, parent) {
            array.forEach(child => {
                traverseNode(child, parent);
            });
        }

        // accepts a node and parent so that it can pass both to our visitor methods
        function traverseNode(node, parent) {

            // We start by testing for the existence of a method on the visitor with a
            // matching `type`.
            let methods = visitor[node.type];

            // If there is an `enter` method for this node type we'll call it with the
            // `node` and its `parent`.
            if (methods && methods.enter) {
                methods.enter(node, parent);
            }

            // Next we are going to split things up by the current node type.
            switch (node.type) {

                // Let's start with the 'Program' array and then call the traverseArray 
                // method for the body node
                case 'Program':
                    traverseArray(node.body, node);
                    break;

                // Next we take care of 'CallExpression' since 'CallExpressions' have params
                // we will pass that as the array params.
                case 'CallExpression':
                    traverseArray(node.params, node);
                    break;

                // `NumberLiteral` and `StringLiteral` We don't have anything to do so we just break
                case 'NumberLiteral':
                case 'StringLiteral':
                    break;

                // If node type is not recognized we simply throw an error
                default:
                    throw new TypeError(node.type);
            }

            // if `exit` method is encountered for this node type we'll call it with the
            // `node` and its `parent`.
            if (methods && methods.exit) {
                methods.exit(node, parent);
            }
        }

        // Let's call the traverserNode function with the parent parameter as null 
        // because the top level does not have a parent
        traverseNode(ast, null);
    }

    // exporting the traverser method
    module.exports = traverser;
    ```

    Next up let's write the transformer function.

    ```javascript
        var traverser = require('./traverser');

        /**
        * ============================================================================
        *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
        *                              THE TRANSFORMER!!!
        * ============================================================================
        */

        /**
        * Our transformer is going to take the ast and pass it to the traverser and for
        * the new AST.
        *
        * ----------------------------------------------------------------------------
        *   Original AST                     |   Transformed AST
        * ----------------------------------------------------------------------------
        *   {                                |   {
        *     type: 'Program',               |     type: 'Program',
        *     body: [{                       |     body: [{
        *       type: 'CallExpression',      |       type: 'ExpressionStatement',
        *       name: 'add',                 |       expression: {
        *       params: [{                   |         type: 'CallExpression',
        *         type: 'NumberLiteral',     |         callee: {
        *         value: '2'                 |           type: 'Identifier',
        *       }, {                         |           name: 'add'
        *         type: 'CallExpression',    |         },
        *         name: 'subtract',          |         arguments: [{
        *         params: [{                 |           type: 'NumberLiteral',
        *           type: 'NumberLiteral',   |           value: '2'
        *           value: '4'               |         }, {
        *         }, {                       |           type: 'CallExpression',
        *           type: 'NumberLiteral',   |           callee: {
        *           value: '2'               |             type: 'Identifier',
        *         }]                         |             name: 'subtract'
        *       }]                           |           },
        *     }]                             |           arguments: [{
        *   }                                |             type: 'NumberLiteral',
        *                                    |             value: '4'
        * ---------------------------------- |           }, {
        *                                    |             type: 'NumberLiteral',
        *                                    |             value: '2'
        *                                    |           }]
        * (sorry the other one is longer 😜) |         }
        *                                    |       }
        *                                    |     }]
        *                                    |   }
        * ----------------------------------------------------------------------------
        */

        // Transformer function with the ast as params
        function transformer(ast) {

            // A new AST with initalization
            let newAst = {
                type: 'Program',
                body: [],
            };

            // We are going to pass a property called context to the node which keeps the reference
            // to the parent
            ast._context = newAst.body;

            // Let's call the traverser function with ast and our visitor
            traverser(ast, {
                // Take care of NumberLiteral
                NumberLiteral: {
                    // We'll visit them on enter.
                    enter(node, parent) {
                            // create a node call 'NumberLiteral' that will push the parent context.
                            parent._context.push({
                                type: 'NumberLiteral',
                                value: node.value,
                            });
                        },
                },

                // Let's do the same for `StringLiteral`
                StringLiteral: {
                    enter(node, parent) {
                        parent._context.push({
                            type: 'StringLiteral',
                            value: node.value,
                        });
                    },
                },

                // So `CallExpression` should be taken care like this.
                CallExpression: {
                    enter(node, parent) {

                        //  create a `CallExpression` node with a nested `Identifier`.
                        let expression = {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: node.name,
                            },
                            arguments: [],
                        };

                        // Let's create a new context for the original 'CallExpression' so that we can push
                        // arguments 
                        node._context = expression.arguments;

                        // Ceck the parent node is a `CallExpression` if it is not then
                        if (parent.type !== 'CallExpression') {

                            // wrap our `CallExpression` node with an `ExpressionStatement`. 
                            // This is done because the top level `CallExpression` in JavaScript are actually 
                            // statements.
                            expression = {
                                type: 'ExpressionStatement',
                                expression: expression,
                            };
                        }

                        // Lat but not the least wrap the expression with the parent context
                        parent._context.push(expression);
                    },
                }
            });

            // return the new AST
            return newAst;
        }

        // export transformer 
        module.exports = transformer;
    ```

3. ### Code Generation

    This is the final step in our compiler design this phase is going to generate the code for the new program by taking the AST. At times compilers do things that will overlap with the transformation.

    Code generators work in different ways, some will reuse the tokens from the earlier and others will generate the code in a linear fashion by generating a new AST.

    In our code generator we are going to use the same AST and generate our code.

    ```javascript
        /**
        * ============================================================================
        *                               ヾ（〃＾∇＾）ﾉ♪
        *                            THE CODE GENERATOR!!!!
        * ============================================================================
        */

        /**
        * Our CodeGenerator is going to call itself recursively to to print a string 
        * The code generator is quite straight forward to understand
        */

        function codeGenerator(node) {

            // We'll break things down by the `type` of the `node`.
            switch (node.type) {

                case 'Program':
                    return node.body.map(codeGenerator)
                        .join('\n');

                // For `ExpressionStatement` call the codegenerator function and add a semicolon
                case 'ExpressionStatement':
                    return (
                        codeGenerator(node.expression) +
                        ';'
                    );

                // For `CallExpression` we will print the `callee`, and call the codeGenerator
                // recursively so that the end result of recursion is going to be a string 
                // the arguments are concatenated as shown below
                case 'CallExpression':
                    return (
                        codeGenerator(node.callee) +
                        '(' +
                        node.arguments.map(codeGenerator)
                        .join(', ') +
                        ')'
                    );

                // For identifier we will return the name
                case 'Identifier':
                    return node.name;

                // For `NumberLiteral` let's return the value
                case 'NumberLiteral':
                    return node.value;

                // For `StringLiteral` we just add quotes arround the value
                case 'StringLiteral':
                    return '"' + node.value + '"';

                // And if we haven't recognized the node, we'll throw an error.
                default:
                    throw new TypeError(node.type);
            }
        }

        // export code generator
        module.exports = codeGenerator;
    ```

    That's it we are done with our compiler 👏👏👏.

    For the last part let us call the compiler program in a file.

    ```javascript
    var tokenizer     = require('./tokenizer');
    var parser        = require('./parser');
    var transformer   = require('./transformer');
    var codeGenerator = require('./code-generator');

    /**
    * ============================================================================
    *                                  (۶* ‘ヮ’)۶”
    *                         !!!!!!!!THE COMPILER!!!!!!!!
    * ============================================================================
    */
    function compiler(input) {
        let tokens = tokenizer(input);
        let ast    = parser(tokens);
        let newAst = transformer(ast);
        let output = codeGenerator(newAst);

        // and simply return the output!
        return output;
    }

    module.exports = compiler;
    ```