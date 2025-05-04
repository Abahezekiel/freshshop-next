import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Detail for ID: {id}</h1>
      {/* You will fetch and display product data here */}
    </div>
  );
}
