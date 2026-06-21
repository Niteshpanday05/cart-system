const API_URL =
  "http://127.0.0.1:8000";

export async function addCartItem(
  productId: number
) {
  const token =
    localStorage.getItem("access");

  const response = await fetch(
    `${API_URL}/api/cart/add/`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
        Authorization:
          `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: 1,
      }),
    }
  );

  return response.json();
}