// import React from "react";
// import {
//     CardBody,
//     Card,
//     Stack,
//     Image,
//     Heading,
//     Divider,
//     CardFooter,
//     Button,
//     ButtonGroup,
//     Text,
// } from "@chakra-ui/react";
// import ProductCard from "./card";

// const getProductData = async () => {
//     await new Promise((resolve) => setTimeout(resolve, 3000));
//     const data = [
//         {
//             id: 123,
//             name: "Hand Bag",
//         },
//         {
//             id: 132,
//             name: "Laptop",
//         },
//     ];

//     return data;
// };

// const TesComponent = async () => {
//     const products = await getProductData();

//     return (
//         <>
//             <ProductCard products={products} />
//         </>
//     );
// };

// export default TesComponent;

"use client";

import { useEffect, useState } from "react";

type Product = {
    id: number;
    name: string;
};

const ProductCard = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/product/api");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    console.log(products);

    return (
        <>
            <div className="flex flex-row gap-10 lg:container mt-16 flex-wrap">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
                    <a href="#"></a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "></h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
