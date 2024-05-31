import Link from "next/link";
import ErrorBoundary from "./errorBoundary";
import { error } from "console";
import Error from "./error";

export default function productPage() {
    return (
        <div>
            <ErrorBoundary fallback='{<Error />}'>
                <h1>Hello from product page </h1>
                <button className="bg-green-500 p-2 rounded-lg">
                    <Link href="/product/1">to product Detail</Link>
                </button>
            </ErrorBoundary>
        </div>
    );
}
