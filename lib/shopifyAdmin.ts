// Shopify Admin API Client
// This uses REST API for admin operations (CRUD on products, orders, etc.)

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || "";
const SHOPIFY_ADMIN_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN || "";

const ADMIN_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2024-01`;

async function adminFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const response = await fetch(`${ADMIN_API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": SHOPIFY_ADMIN_API_TOKEN,
            ...options.headers,
        },
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Shopify Admin API error: ${error}`);
    }

    return response.json();
}

// Product Management

export async function getAllProducts() {
    const data = await adminFetch<any>("/products.json");
    return data.products;
}

export async function getProduct(id: string) {
    const data = await adminFetch<any>(`/products/${id}.json`);
    return data.product;
}

export async function createProduct(productData: any) {
    const data = await adminFetch<any>("/products.json", {
        method: "POST",
        body: JSON.stringify({ product: productData }),
    });
    return data.product;
}

export async function updateProduct(id: string, productData: any) {
    const data = await adminFetch<any>(`/products/${id}.json`, {
        method: "PUT",
        body: JSON.stringify({ product: productData }),
    });
    return data.product;
}

export async function deleteProduct(id: string) {
    await adminFetch(`/products/${id}.json`, {
        method: "DELETE",
    });
}

// Order Management

export async function getAllOrders(status = "any") {
    const data = await adminFetch<any>(`/orders.json?status=${status}`);
    return data.orders;
}

export async function getOrder(id: string) {
    const data = await adminFetch<any>(`/orders/${id}.json`);
    return data.order;
}

export async function updateOrder(id: string, orderData: any) {
    const data = await adminFetch<any>(`/orders/${id}.json`, {
        method: "PUT",
        body: JSON.stringify({ order: orderData }),
    });
    return data.order;
}

export async function cancelOrder(id: string) {
    const data = await adminFetch<any>(`/orders/${id}/cancel.json`, {
        method: "POST",
    });
    return data.order;
}

// Collection Management

export async function getAllCollections() {
    const data = await adminFetch<any>("/custom_collections.json");
    return data.custom_collections;
}

export async function getCollection(id: string) {
    const data = await adminFetch<any>(`/custom_collections/${id}.json`);
    return data.custom_collection;
}

export async function createCollection(collectionData: any) {
    const data = await adminFetch<any>("/custom_collections.json", {
        method: "POST",
        body: JSON.stringify({ custom_collection: collectionData }),
    });
    return data.custom_collection;
}

export async function updateCollection(id: string, collectionData: any) {
    const data = await adminFetch<any>(`/custom_collections/${id}.json`, {
        method: "PUT",
        body: JSON.stringify({ custom_collection: collectionData }),
    });
    return data.custom_collection;
}

export async function deleteCollection(id: string) {
    await adminFetch(`/custom_collections/${id}.json`, {
        method: "DELETE",
    });
}
