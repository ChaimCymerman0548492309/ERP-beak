
// product.interface.ts
export interface ShopProductInterface {
    product_id?: string;
    name: string;
    salePrice: number;
    quantity: number;
    description: string;
    category: string;
    discountPercentage: number;
    image_url: string;
    image_alt: string;    
}

export interface AdminProductInterface extends ShopProductInterface {

    is_for_sale: boolean; // Adjust to match the actual property name in the returned object
    cost_price: number;
    supplier: string;
}

export type CreateProductRequest = Omit<AdminProductInterface, 'product_id'>;
export type UpdateProductRequest = Partial<AdminProductInterface>;

