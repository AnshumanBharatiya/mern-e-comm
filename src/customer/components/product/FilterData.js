
export const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]

export const color = [
    "White",
    "Black",
    "Red",
    "Maroon",
    "Beige",
    "Pink",
    "Green",
    "Yellow"
]

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S', checked: false },
            { value: 'M', label: 'M', checked: false },
            { value: 'L', label: 'L', checked: false },
        ],
    }
]

export const singleFilter = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '159-399', label: '₹159 - ₹399', checked: false },
            { value: '399-999', label: '₹399 - ₹999', checked: false },
            { value: '999-1999', label: '₹999 - ₹1999', checked: false },
            { value: '1999-2999', label: '₹1999 - ₹2999', checked: false },
            { value: '3999-4999', label: '₹3999 - ₹4999', checked: false },
        ],
    },
    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            { value: '10', label: '10% and above', checked: false },
            { value: '20', label: '20% and above', checked: false },
            { value: '30', label: '30% and above', checked: false },
            { value: '40', label: '40% and above', checked: false },
            { value: '50', label: '50% and above', checked: false },
            { value: '60', label: '60% and above', checked: false },
            { value: '70', label: '70% and above', checked: false },
        ],
    },
    {
        id: 'stock',
        name: 'Availability',
        options: [
            { value: 'in_stock', label: 'In Stock', checked: false },
            { value: 'out_of_stock', label: 'Out Of Stock', checked: false },
        ],
    },
]

export const sortOptions = [
    // { name: 'Most Popular', href: '#', current: true },
    // { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]