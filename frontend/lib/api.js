const BASE_URL = "http://127.0.0.1:8000/api";

export async function getCart(token) {
  const res = await fetch(`${BASE_URL}/cart/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function addToCart(token, productId) {
  return fetch(`${BASE_URL}/cart/add/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      product_id: productId,
      quantity: 1,
    }),
  });
}

export async function checkout(token) {
  const res = await fetch(`${BASE_URL}/orders/checkout/`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json();
}