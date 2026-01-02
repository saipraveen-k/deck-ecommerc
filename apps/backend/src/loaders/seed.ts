import { MedusaContainer } from "@medusajs/medusa";

export default async function productSeeder(container: MedusaContainer): Promise<void> {
  const manager = container.resolve("manager");
  const productService = container.resolve("productService");
  const collectionService = container.resolve("collectionService");
  const regionService = container.resolve("regionService");

  try {
    // Create collections
    const mensCollection = await collectionService.create({
      title: "Men's Collection",
      handle: "mens",
    });

    const womensCollection = await collectionService.create({
      title: "Women's Collection", 
      handle: "womens",
    });

    const accessoriesCollection = await collectionService.create({
      title: "Accessories",
      handle: "accessories",
    });

    // Create sample products
    const products = [
      // Men's Products
      {
        title: "Classic Oxford Shirt",
        handle: "classic-oxford-shirt",
        collection_id: mensCollection.id,
        description: "A timeless classic crafted from premium cotton with a perfect fit for any professional setting.",
        status: "published",
        variants: [
          {
            title: "Classic Oxford - White - M",
            sku: "OXF-WHT-M",
            prices: [{ currency_code: "usd", amount: 8900 }],
            inventory_quantity: 100,
            options: { size: "M", color: "White" },
          },
          {
            title: "Classic Oxford - Navy - L", 
            sku: "OXF-NVY-L",
            prices: [{ currency_code: "usd", amount: 8900 }],
            inventory_quantity: 100,
            options: { size: "L", color: "Navy" },
          },
        ],
        tags: ["men", "shirts", "formal", "cotton"],
      },
      {
        title: "Tailored Chinos",
        handle: "tailored-chinos",
        collection_id: mensCollection.id,
        description: "Perfectly tailored chinos that blend comfort with professional style.",
        status: "published",
        variants: [
          {
            title: "Chinos - Khaki - 32",
            sku: "CHN-KHK-32",
            prices: [{ currency_code: "usd", amount: 9900 }],
            inventory_quantity: 80,
            options: { size: "32", color: "Khaki" },
          },
          {
            title: "Chinos - Navy - 34",
            sku: "CHN-NVY-34", 
            prices: [{ currency_code: "usd", amount: 9900 }],
            inventory_quantity: 80,
            options: { size: "34", color: "Navy" },
          },
        ],
        tags: ["men", "pants", "casual", "cotton"],
      },
      {
        title: "Merino Wool Sweater",
        handle: "merino-wool-sweater",
        collection_id: mensCollection.id,
        description: "Luxurious merino wool sweater for ultimate comfort and style.",
        status: "published",
        variants: [
          {
            title: "Sweater - Charcoal - M",
            sku: "SWT-CHR-M",
            prices: [{ currency_code: "usd", amount: 14900 }],
            inventory_quantity: 60,
            options: { size: "M", color: "Charcoal" },
          },
          {
            title: "Sweater - Navy - L",
            sku: "SWT-NVY-L",
            prices: [{ currency_code: "usd", amount: 14900 }],
            inventory_quantity: 60,
            options: { size: "L", color: "Navy" },
          },
        ],
        tags: ["men", "sweaters", "wool", "luxury"],
      },
      // Women's Products
      {
        title: "Silk Blouse",
        handle: "silk-blouse",
        collection_id: womensCollection.id,
        description: "Elegant silk blouse perfect for professional and evening wear.",
        status: "published",
        variants: [
          {
            title: "Blouse - Ivory - S",
            sku: "BLU-IVR-S",
            prices: [{ currency_code: "usd", amount: 11900 }],
            inventory_quantity: 70,
            options: { size: "S", color: "Ivory" },
          },
          {
            title: "Blouse - Black - M",
            sku: "BLU-BLK-M",
            prices: [{ currency_code: "usd", amount: 11900 }],
            inventory_quantity: 70,
            options: { size: "M", color: "Black" },
          },
        ],
        tags: ["women", "tops", "silk", "elegant"],
      },
      {
        title: "A-Line Dress",
        handle: "a-line-dress",
        collection_id: womensCollection.id,
        description: "Classic A-line dress that flatters every body type.",
        status: "published",
        variants: [
          {
            title: "Dress - Navy - 6",
            sku: "DRS-NVY-6",
            prices: [{ currency_code: "usd", amount: 15900 }],
            inventory_quantity: 50,
            options: { size: "6", color: "Navy" },
          },
          {
            title: "Dress - Burgundy - 8",
            sku: "DRS-BRG-8",
            prices: [{ currency_code: "usd", amount: 15900 }],
            inventory_quantity: 50,
            options: { size: "8", color: "Burgundy" },
          },
        ],
        tags: ["women", "dresses", "formal", "elegant"],
      },
      // Accessories
      {
        title: "Leather Belt",
        handle: "leather-belt",
        collection_id: accessoriesCollection.id,
        description: "Premium leather belt with classic buckle design.",
        status: "published",
        variants: [
          {
            title: "Belt - Brown - 38",
            sku: "BLT-BRN-38",
            prices: [{ currency_code: "usd", amount: 6900 }],
            inventory_quantity: 120,
            options: { size: "38", color: "Brown" },
          },
          {
            title: "Belt - Black - 40",
            sku: "BLT-BLK-40",
            prices: [{ currency_code: "usd", amount: 6900 }],
            inventory_quantity: 120,
            options: { size: "40", color: "Black" },
          },
        ],
        tags: ["accessories", "leather", "belts", "men"],
      },
      {
        title: "Wool Scarf",
        handle: "wool-scarf",
        collection_id: accessoriesCollection.id,
        description: "Luxurious wool scarf for cold weather elegance.",
        status: "published",
        variants: [
          {
            title: "Scarf - Camel - One Size",
            sku: "SCF-CML-OS",
            prices: [{ currency_code: "usd", amount: 7900 }],
            inventory_quantity: 90,
            options: { size: "One Size", color: "Camel" },
          },
          {
            title: "Scarf - Charcoal - One Size",
            sku: "SCF-CHR-OS",
            prices: [{ currency_code: "usd", amount: 7900 }],
            inventory_quantity: 90,
            options: { size: "One Size", color: "Charcoal" },
          },
        ],
        tags: ["accessories", "scarves", "wool", "unisex"],
      },
    ];

    // Create products
    for (const productData of products) {
      await productService.create(productData);
    }

    console.log("✅ Products seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding products:", error);
  }
}
