export type Product = {
    slug: string;
    image: string;
    name: string;
    info: string;
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
        image: "/products-images/test.png",
        info: "1100 g / 32 buc.",
        price: 145,
        category: "classic-rolls",
    },
    {
        name: "Alaska Roll",
        slug: toSlug("Alaska Roll"),
        image: "/products-images/test.png",
        info: "1100 g / 32 buc.",
        price: 120,
        category: "classic-rolls",
    },
    {
        name: "Midii Grill Special",
        slug: toSlug("Midii Grill Special"),
        image: "/products-images/test.png",
        info: "1100 g / 32 buc.",
        price: 175,
        category: "midii-grill",
    },
];

export function getProductsByCategorySlug(categorySlug: string) {
    return PRODUCTS.filter(p => p.category === categorySlug);
}