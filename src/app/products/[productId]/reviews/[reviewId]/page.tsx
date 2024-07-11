import { notFound } from "next/navigation";

export default function detailProductReviews({ params } : { params: { productId: string; reviewId: string }; }) {
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return <div>Product {params.productId} Review {params.reviewId}</div>;
}