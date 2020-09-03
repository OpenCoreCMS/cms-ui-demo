export default function PaginationComponent({ current, total }) {
  return <div className="textCenter paginationBox">
    Viewing page {current} of {total}
  </div>
}
