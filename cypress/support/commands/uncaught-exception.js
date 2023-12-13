Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('e.initialize is not a function')) {
      return false;
    }
    return true;
  });