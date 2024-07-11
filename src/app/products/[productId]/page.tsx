export default function detailProduct({ params } :{ params: { productId: string }; }) {
    return <div>Product  {params.productId}</div>;
}