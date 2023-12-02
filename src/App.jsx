import EstilosGlobais from './EstilosGlobais';
import Header from './components/Header';
import ConteudoPrincipal from './components/ConteudoPrincipal';
import Footer from './components/Footer';

const App = () => {
    return (
        <main>
            <EstilosGlobais />
            <Header />
            <ConteudoPrincipal />
            <Footer />
        </main>
    );
}

export default App;
