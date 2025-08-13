export type Product = {
    slug: string;
    name: string;
    image: string;
    price: number;
    category: string;
};

const toSlug = (name: string) =>
    name
        .toLowerCase()
        .replace(/[^a-z0-9ăâîșț\- ]/gi, "")
        .trim()
        .replace(/\s+/g, "-");

export const PRODUCTS: Product[] = [
    {
        name: "Philadelphia Avo",
        slug: toSlug("Philadelphia Avo"),
        image: "/images/products/philadelphia-avo.jpg",
        price: 145,
        category: "classic-rolls",
    },
    {
        name: "Alaska Roll",
        slug: toSlug("Alaska Roll"),
        image: "/images/products/alaska.jpg",
        price: 120,
        category: "classic-rolls",
    },
    {
        name: "Midii Grill Special",
        slug: toSlug("Midii Grill Special"),
        image: "/images/products/midii.jpg",
        price: 175,
        category: "midii-grill",
    },
];