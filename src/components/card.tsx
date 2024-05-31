import Link from "next/link";
// , { cache: "no-store" }
const getProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch("https://fakestoreapi.com/products?limit=9", { cache: "no-store" });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

type datas = {
    category: string;
    description: string;
    image: string;
    price: number;
    rating?: {};
    title: string;
}[];
const truncate = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
};
const ProductCard = async () => {
    const datas: datas = await getProducts();

    return (
        <div className="flex flex-row gap-10 container mt-16 flex-wrap justify-center items-center">
            {datas.map((data, id) => (
                <div key={id} className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow  ">
                    <Link href="#" className="flex justify-center items-center">
                        <div
                            className="bg-center bg-contain bg-no-repeat w-full h-44"
                            style={{
                                backgroundImage: `url(${data.image})`,
                            }}
                        ></div>
                    </Link>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                {truncate(data.title, 30)}
                            </h5>
                        </a>
                        <h4 className="font-bold">${data.price}</h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {truncate(data.description, 70)}
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
            ))}
        </div>
    );
};

export default ProductCard;
