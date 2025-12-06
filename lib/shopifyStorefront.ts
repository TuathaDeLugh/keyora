// Shopify Storefront API Client
// This uses GraphQL to fetch public store data

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || "";
const SHOPIFY_STOREFRONT_API_TOKEN =
    process.env.SHOPIFY_STOREFRONT_API_TOKEN || "";

const STOREFRONT_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

async function shopifyFetch<T>({
    query,
    variables = {},
}: {
    query: string;
    variables?: Record<string, any>;
}): Promise<T> {
    const response = await fetch(STOREFRONT_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_API_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error(`Shopify API error: ${response.statusText}`);
    }

    const json = await response.json();

    if (json.errors) {
        throw new Error(json.errors[0].message);
    }

    return json.data;
}

// Product Queries

export async function getProducts(limit = 20) {
    const query = `
    query GetProducts($limit: Int!) {
      products(first: $limit) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

    const data = await shopifyFetch<any>({
        query,
        variables: { limit },
    });

    return data.products.edges.map((edge: any) => edge.node);
}

export async function getProductByHandle(handle: string) {
    const query = `
    query GetProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 50) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
      }
    }
  `;

    const data = await shopifyFetch<any>({
        query,
        variables: { handle },
    });

    return data.product;
}

// Collection Queries

export async function getCollections(limit = 20) {
    const query = `
    query GetCollections($limit: Int!) {
      collections(first: $limit) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

    const data = await shopifyFetch<any>({
        query,
        variables: { limit },
    });

    return data.collections.edges.map((edge: any) => edge.node);
}

export async function getCollectionByHandle(handle: string) {
    const query = `
    query GetCollectionByHandle($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        products(first: 50) {
          edges {
            node {
              id
              title
              handle
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

    const data = await shopifyFetch<any>({
        query,
        variables: { handle },
    });

    return data.collection;
}

// Search

export async function searchProducts(query: string) {
    const searchQuery = `
    query SearchProducts($query: String!) {
      products(first: 20, query: $query) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

    const data = await shopifyFetch<any>({
        query: searchQuery,
        variables: { query },
    });

    return data.products.edges.map((edge: any) => edge.node);
}

// Cart Operations (using Shopify Cart API)

export async function createCart() {
    const query = `
    mutation CreateCart {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `;

    const data = await shopifyFetch<any>({ query });
    return data.cartCreate.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity: number) {
    const query = `
    mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

    const data = await shopifyFetch<any>({
        query,
        variables: {
            cartId,
            lines: [{ merchandiseId: variantId, quantity }],
        },
    });

    return data.cartLinesAdd.cart;
}
