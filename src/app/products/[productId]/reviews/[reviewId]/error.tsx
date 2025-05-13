"use client";

// export default function ErrorBoundary({error}: {
//   error: Error
// }) {  
//   return <div>Error in reviewId</div>
// }


export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message} <button onClick={reset} className="bg-red-600 border text-white p-2 rounded">Try again</button>
    </div>
  );
}
