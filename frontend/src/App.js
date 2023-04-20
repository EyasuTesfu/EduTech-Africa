import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
export default function App() {
  return (
    <div>
      <body>
        <NavBar />

        {/* ======= Hero Section =======  */}

        <LandingPage />
        {/* ======================= Footer ======================  */}
        <Footer />

        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* <script src="assets/js/main.js"></script>  */}
      </body>
    </div>
  );
}
