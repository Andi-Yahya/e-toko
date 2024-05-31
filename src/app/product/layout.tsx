import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import DetailProduct from "./@detailProduct/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Home",
    description: "This E-Commerce is made by Andi Yahya",
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <div className="mt-60">
            {children}
            {modal}
        </div>
    );
}
