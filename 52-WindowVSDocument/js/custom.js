// BOM(Browser Object Model) represent our current tab of browser. It's main object is "Window".


// ================================================
// Window object : It's the topmost object in BOM and outermost element of the object hierarchy.
// It usually encompass our "current tab" and sometimes an "iframe".
// Window object has properties like: browser history, location, screen etc.

// Note: In case of multi tab browser, a window object represents a single tab.
// But some properties like "innerHeight", "innerWidth" & methods like "resizeTo()" will affect the whole browser window.(Although almost all modern browser disable it by default)

// Note: "iframes" are technically are in themselves another window object. That's why you are able to load a whole another website inside it.

// Example: alert(), prompt() are actually window methods or BOM methods


// ===================================================
// Document object: It's the "child of Window object".
// Each HTML document that gets loaded into a window becomes a document object.

// Document object represents the whole html document as a tree of Objects(HTML, HEAD, BODY, and other HTML tags).
//  Document contains the contents of page. Using document object, JavaScript modify, add and delete the HTML elements, attributes CSS styles.



//=============================================================
// "Screen" is just another window object property that holds information of browser screen.
// It refers to screen object associated with that window object. Used to display screen width, height, colorDepth, pixelDepth etc.

// Screen is also availble inside the document object. So it can be accessd directly there too

// Note: Just like screen there are many properties which are same or similar for both Window and Document object.