import Menu from './Menu';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <main>
      <header>
        <Menu />
      </header>
      {props.children}
      <Footer />
    </main>
  );
};
