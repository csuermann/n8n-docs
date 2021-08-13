(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1509:function(e,o,t){"use strict";t.r(o);var r=t(27),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[e._v("#")]),e._v(" Workflow")]),e._v(" "),r("p",[e._v("A "),r("RouterLink",{attrs:{to:"/reference/glossary.html#workflow"}},[e._v("workflow")]),e._v(" is a collection of nodes connected together to automate a process.")],1),e._v(" "),r("p",[e._v("A workflow can be started manually (with the Start node) or by Trigger nodes. When a workflow is started, it executes all the active and connected nodes. The workflow execution ends when all the nodes have processed their data. You can view your workflow executions in the "),r("strong",[e._v("Execution log")]),e._v(", which can be helpful for debugging.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(471),alt:"Workflow"}})]),e._v(" "),r("h2",{attrs:{id:"activating-a-workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#activating-a-workflow"}},[e._v("#")]),e._v(" Activating a workflow")]),e._v(" "),r("p",[e._v("Workflows that start with a Trigger node or a Webhook node need to be activated in order to be executed. This is done via the "),r("strong",[e._v("Active")]),e._v(" toggle in the Editor UI.")]),e._v(" "),r("p",[e._v("Active workflows enable the Trigger and Webhook nodes to receive data whenever a condition is met (e.g., Monday at 10:00, an update in a Trello board) and in turn trigger the workflow execution.")]),e._v(" "),r("p",[e._v("All the newly created workflows are deactivated by default.")]),e._v(" "),r("h2",{attrs:{id:"sharing-a-workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sharing-a-workflow"}},[e._v("#")]),e._v(" Sharing a workflow")]),e._v(" "),r("p",[e._v("Workflows are saved in JSON format. You can export your workflows as JSON files or import JSON files into your n8n library. Feel free to "),r("RouterLink",{attrs:{to:"/reference/contributing.html#contribute-a-workflow-🧬"}},[e._v("share your workflows")]),e._v(" on the "),r("a",{attrs:{href:"https://n8n.io/workflows",target:"_blank",rel:"noopener noreferrer"}},[e._v("n8n page"),r("OutboundLink")],1),e._v(" and contribute to the workflow library.")],1),e._v(" "),r("p",[e._v("You can export a workflow as a JSON file in two ways:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Download")]),e._v(": Click the Download button under the Workflow menu in the sidebar. This will download the workflow as a JSON file.")]),e._v(" "),r("li",[r("strong",[e._v("Copy-Paste")]),e._v(": Select all the workflow nodes in the Editor UI, copy them (Ctrl + c), then paste them (Ctrl + v) in your desired file.")])]),e._v(" "),r("p",[e._v("You can import JSON files as workflows in two ways:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Import")]),e._v(": Click Import from File or Import from URL under the Workflow menu in the sidebar and select the JSON file or paste the link to a workflow.")]),e._v(" "),r("li",[r("strong",[e._v("Copy-Paste")]),e._v(": Copy the JSON workflow to the clipboard (Ctrl + c) and paste it (Ctrl + v) into the Editor UI.")])]),e._v(" "),r("h2",{attrs:{id:"workflow-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow-settings"}},[e._v("#")]),e._v(" Workflow settings")]),e._v(" "),r("p",[e._v("On each workflow, it is possible to set some custom settings and overwrite some of the global default settings from the "),r("strong",[e._v("Workflow")]),e._v(" > "),r("strong",[e._v("Settings")]),e._v(" menu.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(472),alt:"The Workflow Setting modal."}})]),e._v(" "),r("p",[e._v("The following settings are available:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Error Workflow")]),e._v(": Select a workflow to trigger if the current workflow fails. See "),r("RouterLink",{attrs:{to:"/getting-started/key-concepts.html#error-workflow"}},[e._v("Error Workflow")]),e._v(" for more details.")],1),e._v(" "),r("li",[r("strong",[e._v("Timezone")]),e._v(": Sets the timezone to be used in the workflow. The default timezone is EDT (New York). The Timezone setting is particularly important for the Cron Trigger node.")]),e._v(" "),r("li",[r("strong",[e._v("Save Data Error Execution")]),e._v(": If the execution data of the workflow should be saved when the workflow fails.")]),e._v(" "),r("li",[r("strong",[e._v("Save Data Success Execution")]),e._v(": If the execution data of the workflow should be saved when the workflow succeeds.")]),e._v(" "),r("li",[r("strong",[e._v("Save Manual Executions")]),e._v(": If executions started from the Editor UI should be saved.")]),e._v(" "),r("li",[r("strong",[e._v("Save Execution Progress")]),e._v(': If the execution data of each node should be saved. If set to "Yes", the workflow resumes from where it stopped in case of an error. However, this might increase latency.')]),e._v(" "),r("li",[r("strong",[e._v("Timeout Workflow")]),e._v(": Toggle to enable setting a duration after which the current workflow execution should be cancelled.")]),e._v(" "),r("li",[r("strong",[e._v("Timeout After")]),e._v(": Only available when "),r("strong",[e._v("Timeout Workflow")]),e._v(" is enabled. Set the time in hours, minutes, and seconds after which the workflow should timeout. For n8n.cloud users a maximum available timeout is enforced for each plan (e.g. 3 minutes for Start level).")])]),e._v(" "),r("h2",{attrs:{id:"failed-workflows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#failed-workflows"}},[e._v("#")]),e._v(" Failed workflows")]),e._v(" "),r("p",[e._v("If your workflow execution fails, you can retry the execution. To retry a failed workflow:")]),e._v(" "),r("ol",[r("li",[e._v("Open the Executions list from the sidebar.")]),e._v(" "),r("li",[e._v("For the workflow execution you want to retry, click on the refresh icon under the Status column.")]),e._v(" "),r("li",[e._v("Select either of the following options to retry the execution:\n"),r("ul",[r("li",[r("strong",[e._v("Retry with currently saved workflow")]),e._v(": Once you make changes to your workflow, you can select this option to execute the workflow with the previous execution data.")]),e._v(" "),r("li",[r("strong",[e._v("Retry with original workflow")]),e._v(": If you want to retry the execution without making changes to your workflow, you can select this option to retry the execution with the previous execution data.")])])])]),e._v(" "),r("p",[e._v("You can also use the "),r("a",{attrs:{href:"../../nodes/nodes-library/core-nodes/ErrorTrigger"}},[e._v("Error Trigger node")]),e._v(", which triggers a workflow when another workflow has an error. Once a workflow fails, this node gets details about the failed workflow and the errors.")])])}),[],!1,null,null,null);o.default=a.exports},471:function(e,o,t){e.exports=t.p+"assets/img/Execute_workflow.eb124b62.gif"},472:function(e,o,t){e.exports=t.p+"assets/img/workflow_settings.8d9af9df.png"}}]);