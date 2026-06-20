const BASE_URL = "http://127.0.0.1:8000/api";

// LOGIN
export async function login(username, password) {
  const res = await fetch(`${BASE_URL}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return res.json();
}

// GET CART
export async function getCart(token) {
  const res = await fetch(`${BASE_URL}/cart/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

// ADD TO CART
export async function addToCart(token, productId, quantity) {
  const res = await fetch("http://127.0.0.1:8000/api/cart/add/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      product_id: productId,
      quantity: quantity,
    }),
  });

  const data = await res.json(); // ✅ read ONCE

  if (!res.ok) {
    throw new Error(data.message || "Failed to add to cart");
  }

  return data; // ✅ return parsed data
}


  export async function checkout(token) {
    const res = await fetch(`${BASE_URL}/orders/checkout/`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.json();
  }