const findProducts = async () => {
  try {
    const res = await fetch(
      "http://kdt-sw-8-team02.elicecoding.com/api/v1/products",
      {
        method: "GET",
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data.data;
    } else {
      console.error(res.status, res.statusText, res.statusCode);
    }
  } catch (e) {
    console.error(e);
  }
};

await findProducts();
