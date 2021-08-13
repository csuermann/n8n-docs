(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1490:function(t,n,e){"use strict";e.r(n);var a=e(27),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_5-calculating-booked-orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-calculating-booked-orders"}},[t._v("#")]),t._v(" 5. Calculating Booked Orders")]),t._v(" "),a("p",[t._v("In this step of the workflow you will learn how n8n data is structured and how to add custom JavaScript code to perform calculations using the "),a("em",[t._v("Function")]),t._v(" node.")]),t._v(" "),a("p",[t._v("The next step in Nathan’s workflow is to calculate two values from the booked orders:")]),t._v(" "),a("ul",[a("li",[t._v("The total number of booked orders")]),t._v(" "),a("li",[t._v("The total value of all booked orders")])]),t._v(" "),a("p",[t._v("To calculate data and add more functionality to your workflows you can use the "),a("strong",[t._v("Function node")]),t._v(", which lets you write custom JavaScript code.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Function vs Function Item")]),t._v(" "),a("p",[t._v("n8n also provides a "),a("strong",[t._v("Function Item node")]),t._v(", which should not be confused with the Function node. The Function Item node is used to add custom snippets of JavaScript code that should be executed once for every item that it receives as the input. Learn more about the difference between the Function and Function Item nodes "),a("RouterLink",{attrs:{to:"/getting-started/key-concepts.html#function"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Before going into the setup of the Function node, you should first learn the "),a("RouterLink",{attrs:{to:"/getting-started/key-concepts.html#data-structure"}},[t._v("data structure")]),t._v(" of n8n. This is important if you want to:")],1),t._v(" "),a("ul",[a("li",[t._v("create your own node")]),t._v(" "),a("li",[t._v("write custom expressions")]),t._v(" "),a("li",[t._v("use the Function or Function Item node")]),t._v(" "),a("li",[t._v("get the most out of n8n")])]),t._v(" "),a("p",[t._v("In n8n, the data that is passed between nodes is an array of objects with the following structure:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Each item has to contain a "json" property. But it can be an empty object like {}.')]),t._v("\n   \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Any kind of JSON data is allowed. So arrays and the data being deeply nested is fine.")]),t._v("\n   \t json"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The actual data n8n operates on (required)")]),t._v("\n   \t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This data is only an example it could be any kind of JSON data")]),t._v("\n   \t\t jsonKeyName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'keyValue'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   \t\t anotherJsonKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t\t\t lowerLevelJsonKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n   \t\t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Binary data of item. The most items in n8n do not contain any (optional)")]),t._v("\n   \t binary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// The key-name "binaryKeyName" is only an example. Any kind of key-name is possible.')]),t._v("\n   \t\t binaryKeyName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t\t\t data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '....'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Base64 encoded binary data (required)")]),t._v("\n   \t\t\t mimeType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'image/png'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n   \t\t\t fileExtension"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'png'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n   \t\t\t fileName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'example.png'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional but should be set if possible (optional)")]),t._v("\n   \t\t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Now let’s see how to implement this.")]),t._v(" "),a("p",[t._v("In your workflow, add a "),a("em",[t._v("Function")]),t._v(" node connected to the false branch of the "),a("em",[t._v("IF")]),t._v(" node. In the "),a("em",[t._v("Function")]),t._v(" node window paste the following code in the JavaScript Code box:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" totalBooked "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bookedSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bookedSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bookedSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orderPrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("totalBooked"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bookedSum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Notice the format in which we return the results of the calculation:\n"),a("code",[t._v("return [{json:{totalBooked, bookedSum}}]")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Data structure error")]),t._v(" "),a("p",[t._v("If you don’t use the correct data structure, you will get an error message: "),a("code",[t._v("Error: Always an Array of items has to be returned!")])])]),t._v(" "),a("p",[t._v("Now execute the node and you should see the following results:")]),t._v(" "),a("figure",[a("img",{staticStyle:{width:"100%"},attrs:{src:e(433),alt:"Function node"}}),a("figcaption",{attrs:{align:"center"}},[a("i",[t._v("Function node")])])]),t._v(" "),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's next?")]),t._v(" "),a("p",[a("strong",[t._v("Nathan 🙋")]),t._v(": Wow, the Function node is really powerful! So if I have some basic JavaScript skills I can power up my workflows.")]),t._v(" "),a("p",[a("strong",[t._v("You 👩‍🔧")]),t._v(": Exactly – you can progress from no-code to low-code!")]),t._v(" "),a("p",[a("strong",[t._v("Nathan 🙋")]),t._v(": Now, how do I send the calculations for the booked orders to my team's Discord channel?")]),t._v(" "),a("p",[a("strong",[t._v("You 👩‍🔧")]),t._v(": There's an n8n node for that – I'll set it up in the next step.")])])}),[],!1,null,null,null);n.default=s.exports},433:function(t,n,e){t.exports=e.p+"assets/img/Function-node.8f0c4493.png"}}]);