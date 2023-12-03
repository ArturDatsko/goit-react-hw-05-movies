import Header from './header/header';
import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { MainStyled } from './GlobalStyled';

const HomePage = lazy(() => import('pages/home/home'));
const MovieById = lazy(() => import('pages/movie-id/movie-id'));
const MovieCast = lazy(() => import('components/movie-cast/movie-cast'));
const MovieReviews = lazy(() =>
  import('components/movie-reviews/movie-reviews')
);
const Movies = lazy(() => import('pages/movies/movies'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainStyled>
                <Outlet />
              </MainStyled>
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={
              <>
                <MovieById />
                <Outlet />
              </>
            }
          >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          {/* Використання "*" в підмаршруті, щоб відловлювати всі інші маршрути */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
