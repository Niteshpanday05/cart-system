const API_URL = "http://127.0.0.1:8000";

export async function addCartItem(productId: number) {
  try {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("access")
        : null;

    const response = await fetch(
      `${API_URL}/api/cart/add/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Failed to add item"
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Add to cart error:", error);
    throw error;
  }
}
