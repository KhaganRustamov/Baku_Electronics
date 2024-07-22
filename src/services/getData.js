import axios from "axios";

export const getSliders = async () => {
  const response = await axios.get("https://api.b-e.az/task/big-sliders");
  if (!response.data) throw new Error("Unable to fetch data.");
  return response.data.map((item) => {
    return {
      image: item.image,
    };
  });
};



export const getProducts = async () => {
  const response = await axios.get("https://api.b-e.az/task/special-offer");
  if (!response.data) throw new Error("Unable to fetch data.");
  const allProducts = response.data.reduce((acc, item) => {
    const products = item.products.map((product) => ({
      title: item.title,
      id: product.id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      monthCount: product.perMonth ? product.perMonth.month : null,
      pricePerMonth: product.perMonth ? product.perMonth.price : null,
      image: product.image,
    }));
    return acc.concat(products);
  }, []);

  return allProducts;
};
