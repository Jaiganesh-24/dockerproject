const apiUrl = process.env.REACT_APP_API_URL;

export const fetchItems = async () => {
  try {
    const response = await fetch(`${apiUrl}/items`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
