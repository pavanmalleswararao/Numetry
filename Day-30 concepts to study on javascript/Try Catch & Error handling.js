try {
    
    throw new Error('Something went wrong');
  } catch (error) {
    console.error(error.message);
  }
  