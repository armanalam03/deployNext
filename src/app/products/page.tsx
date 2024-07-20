import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-4xl">Products</span>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
      <Link href="/product/3">Product 3</Link>
    </div>
  );
};

export default page;
