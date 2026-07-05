export default function Loading() {
  return (
    <div className="ryom-page-loader" role="status" aria-live="polite" aria-label="Loading page">
      <img src="/loader.png" alt="" className="ryom-page-loader__mark" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
