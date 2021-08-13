(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1422:function(e,t,o){e.exports=o.p+"assets/img/workflow.b1183e52.png"},2012:function(e,t,o){"use strict";o.r(t);var n=o(27),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"thehive-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#thehive-trigger"}},[e._v("#")]),e._v(" TheHive Trigger")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://thehive-project.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TheHive"),n("OutboundLink")],1),e._v(" is a scalable open-source and free security incident response platform.")]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive updates when an event occurs in TheHive. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/810",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following node.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("TheHive Trigger")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1422),alt:"A workflow with the TheHive Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-thehive-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-thehive-trigger-node"}},[e._v("#")]),e._v(" 1. TheHive Trigger node")]),e._v(" "),n("p",[e._v("This node will trigger the workflow whenever a new event occurs in TheHive. To trigger the workflow for a specific event, select that event instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to add the webhook URL in TheHive instance configuration. Refer to the "),n("a",{attrs:{href:"#how-to-configure-a-webhook-in-thehive"}},[e._v("FAQs")]),e._v(" to learn how to configure a webhook in TheHive.")]),e._v(" "),n("li",[e._v("Select the "),n("code",[e._v("*")]),e._v(" from the "),n("em",[n("strong",[e._v("Events")])]),e._v(" dropdown list. This will trigger the workflow for all the events.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the TheHive Trigger node.")])]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-to-configure-a-webhook-in-thehive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-a-webhook-in-thehive"}},[e._v("#")]),e._v(" How to configure a Webhook in TheHive?")]),e._v(" "),n("p",[e._v("To configure the webhook for your TheHive instance follow the steps mentioned below.")]),e._v(" "),n("ol",[n("li",[e._v("Copy the webhook URL from TheHive Trigger node.")]),e._v(" "),n("li",[e._v("Add the following lines to the application.conf file. This is TheHive configuration file.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('notification.webhook.endpoints = [\n    {\n        name: WEBHOOK_NAME\n        url: WEBHOOK_URL\n        version: 0\n        wsConfig: {}\n        includedTheHiveOrganisations: ["ORGANIZATION_NAME"]\n        excludedTheHiveOrganisations: []\n    }\n]\n')])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Replace "),n("code",[e._v("WEBHOOK_URL")]),e._v(" with the URL you copied in the previous step.")]),e._v(" "),n("li",[e._v("Replace "),n("code",[e._v("ORGANIZATION_NAME")]),e._v(" with your organization name.")]),e._v(" "),n("li",[e._v("Execute the following cURL command to enable notifications.")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -XPUT -uTHEHIVE_USERNAME:THEHIVE_PASSWORD -H "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-type: application/json'")]),e._v(" THEHIVE_URL/api/config/organisation/notification -d "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'\n{\n    "value": [\n        {\n        "delegate": false,\n        "trigger": { "name": "AnyEvent"},\n        "notifier": { "name": "webhook", "endpoint": "WEBHOOK_NAME" }\n        }\n    ]\n}\'')]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);