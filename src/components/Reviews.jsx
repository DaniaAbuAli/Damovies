export default function Reviews({ reviews }) {
  const filteredReviews = reviews.filter(
    (review) => review.author_details.avatar_path !== null
  );
  return (
    <div className="reviews mt-4">
      <h3 className="mb-3">Reviews: </h3>
      {filteredReviews.length > 0 ? (
        filteredReviews.map((review, index) => {
          const authorAvatar = `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`;
          return (
            <div className="review mb-4" key={index}>
              <div className="row">
                <div className="col-12 col-md-3 col-lg-2">
                  <img src={authorAvatar} alt="author-avatar" />
                </div>
                <div className="author-info col-12 col-md-9 col-lg-10">
                  <p className="fw-bold name">{review.author_details.name}</p>
                  <p className="fw-300 username">
                    {review.author_details.username}
                  </p>
                  <p>Rating: {review.author_details.rating}</p>
                </div>
              </div>
              <h4 className="mt-3">Comment:</h4>
              <p>{review.content}</p>
            </div>
          );
        })
      ) : (
        <p className="fw-300">No Reviews</p>
      )}
    </div>
  );
}
