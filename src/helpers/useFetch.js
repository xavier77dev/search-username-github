const useFetch = async (url) => {


  try {
    const response = await fetch(url);
    if (response.status == 404) {
      return {
        data: [],
        error: false,
        found: true
      }
    }
    const data = await response.json();
  
    return {
      data,
      error: false,
      found: false
    };
  } catch (err) {
    return {
      data: [],
      error: true,
      found: false
    }
  }
}

export default useFetch
