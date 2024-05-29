import TesComponent from "@/components/tesComponent";
import BannerSlider from "../components/banner";
import { Suspense } from "react";   
import ProductCard from "@/components/card";
import Loading from "./loading";
// import Loading from "./loading";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between mx-8 my-24 lg:mx-40">
            <BannerSlider />
            <Suspense fallback={<Loading />}>
                <ProductCard />
                {/* <TesComponent /> */}
            </Suspense>
        </main>
    );
}
