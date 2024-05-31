"use client"; 

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="mt-60" style={{ height: "1000px" }}>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
