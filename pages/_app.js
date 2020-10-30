import NextNprogress from 'nextjs-progressbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}
