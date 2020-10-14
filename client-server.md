**HOW REQUEST GETS SERVED?**

When the server first starts up it performs some initialization and then waits for an HTTP request from a client (such as a browser). When it receives a request, it first selects a virtual server. For details about how the virtual server is determined, see the Sun Java System Web Server 6.1 SP11 Administrator’s Configuration File Reference.

After the virtual server is selected, the obj.conf file for the virtual server class specifies how the request is handled in the following steps:

**ProcedureTo handle request**

**AuthTrans (authorization)**

Verify any authorization information (such as name and password) sent in the request.

**NameTrans (name)**

Translate the logical URI into a local file system path.

**PathCheck (path)**

Check the local file system path for validity and check that the requestor has access privileges to the requested resource on the file system.

**ObjectType (object typing)**

Determine the MIME-type (Multi-purpose Internet Mail Encoding) of the requested resource (for example, text/html, image/gif, and so on).

**Input (prepare to read input)**

Select filters that will process incoming request data read by the Service step.

**Output (prepare to send output)**

Select filters that will process outgoing response data generated by the Service step.

**Service (generate the response)**

Generate and return the response to the client.

**AddLog (adding log entries)**

Add entries to log file(s).

**Error (service)**

This step is executed only if an error occurs in the previous steps. If an error occurs, the server logs an error message and aborts the process.

**Directives for Handling Requests**

The file obj.conf contains a series of instructions, known as directives, that tell the Sun Java System Web Server what to do at each stage in the request-handling process. Each directive invokes a SAF with one or more arguments. Each directive applies to a specific stage in the request-handling process. The stages are AuthTrans, NameTrans, PathCheck, ObjectType, Input, Output, Service, and AddLog.

For example, the following directive applies during the NameTrans stage. It calls the document-root function with the root argument set to D://Sun/WebServer61/server1/docs. (The document-root function translates the http://server_name/ part of the URL to the document root, which in this example is D://Sun/WebServer61/server1/docs.)

NameTrans fn="document-root" root="D:/Sun/WebServer61/server1/docs"
The functions invoked by the directives in obj.conf are known as SAFs.