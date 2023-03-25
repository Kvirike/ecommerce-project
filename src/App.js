import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';

const queryClient = new QueryClient()
export default function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
  }
