import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { CartItem } from '@/App';

interface CartPageProps {
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  onNavigate: (page: string) => void;
}

const CartPage = ({ cart, updateQuantity, removeFromCart, onNavigate }: CartPageProps) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCost = subtotal > 5000 ? 0 : 500;
  const total = subtotal + deliveryCost;

  if (cart.length === 0) {
    return (
      <div className="container py-16">
        <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-8">КОРЗИНА</h1>
        <div className="text-center py-16 bg-muted/40 rounded-lg">
          <Icon name="ShoppingCart" className="mx-auto mb-4 text-muted-foreground" size={64} />
          <h3 className="font-oswald text-2xl font-semibold mb-2">Ваша корзина пуста</h3>
          <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
          <Button onClick={() => onNavigate('catalog')} size="lg">
            Перейти в каталог
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-8">КОРЗИНА</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={14} />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                        className="w-16 h-8 text-center"
                        min="0"
                      />
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={14} />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Icon name="Trash2" size={18} className="text-destructive" />
                    </Button>
                    <div className="text-right">
                      <div className="font-oswald text-xl font-bold text-primary">
                        {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.price.toLocaleString('ru-RU')} ₽ за шт.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="font-oswald text-2xl font-bold mb-6">ИТОГО</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Товары ({cart.length})</span>
                  <span className="font-semibold">{subtotal.toLocaleString('ru-RU')} ₽</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="font-semibold">
                    {deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost.toLocaleString('ru-RU')} ₽`}
                  </span>
                </div>

                {deliveryCost > 0 && (
                  <div className="text-sm text-muted-foreground bg-muted/40 p-3 rounded-lg">
                    <Icon name="Truck" className="inline mr-1" size={16} />
                    Бесплатная доставка от 5 000 ₽
                  </div>
                )}

                <Separator />

                <div className="flex justify-between items-baseline">
                  <span className="font-oswald text-xl font-semibold">Всего к оплате</span>
                  <span className="font-oswald text-3xl font-bold text-primary">
                    {total.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              <Button className="w-full mb-3" size="lg">
                ОФОРМИТЬ ЗАКАЗ
              </Button>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={() => onNavigate('catalog')}
              >
                Продолжить покупки
              </Button>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Shield" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-muted-foreground">Гарантия качества на все товары</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="RefreshCw" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-muted-foreground">Возврат в течение 14 дней</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Lock" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-muted-foreground">Безопасная оплата</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
