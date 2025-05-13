import { notfound} from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}