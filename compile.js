console.log("Starting build sequence...");

// Deliberate compilation/evaluation error
throw new Error("SyntaxError: Unexpected keyword 'const' inside function scope.");
