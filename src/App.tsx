import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import HomePage from '@/pages/Home';
import CatalogPage from '@/pages/Catalog';
import CartPage from '@/pages/Cart';
import AboutPage from '@/pages/About';
import ContactsPage from '@/pages/Contacts';
import DeliveryPage from '@/pages/Delivery';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'catalog':
        return <CatalogPage onNavigate={setCurrentPage} addToCart={addToCart} />;
      case 'cart':
        return <CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contacts':
        return <ContactsPage onNavigate={setCurrentPage} />;
      case 'delivery':
        return <DeliveryPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-primary-foreground" size={24} />
            </div>
            <span className="font-oswald text-2xl font-bold">АВТОВАЗ ЗАПЧАСТИ</span>
          </div>

          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === 'home' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setCurrentPage('catalog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === 'catalog' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setCurrentPage('delivery')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === 'delivery' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Оплата и доставка
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === 'about' ? 'text-primary' : 'text-foreground'
              }`}
            >
              О компании
            </button>
            <button
              onClick={() => setCurrentPage('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === 'contacts' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Контакты
            </button>
          </nav>

          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={() => setCurrentPage('cart')}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="border-t bg-muted/40 mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-4">АВТОВАЗ ЗАПЧАСТИ</h3>
              <p className="text-sm text-muted-foreground">
                Оригинальные запчасти для автомобилей LADA. Быстрая доставка по всей России.
              </p>
            </div>
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentPage('catalog')} className="text-muted-foreground hover:text-primary transition-colors">Двигатель</button></li>
                <li><button onClick={() => setCurrentPage('catalog')} className="text-muted-foreground hover:text-primary transition-colors">Подвеска</button></li>
                <li><button onClick={() => setCurrentPage('catalog')} className="text-muted-foreground hover:text-primary transition-colors">Тормозная система</button></li>
                <li><button onClick={() => setCurrentPage('catalog')} className="text-muted-foreground hover:text-primary transition-colors">Кузовные детали</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentPage('about')} className="text-muted-foreground hover:text-primary transition-colors">О компании</button></li>
                <li><button onClick={() => setCurrentPage('delivery')} className="text-muted-foreground hover:text-primary transition-colors">Доставка и оплата</button></li>
                <li><button onClick={() => setCurrentPage('contacts')} className="text-muted-foreground hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@avtovaz-parts.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Тольятти, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 АВТОВАЗ ЗАПЧАСТИ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
