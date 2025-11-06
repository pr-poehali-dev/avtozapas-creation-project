import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNlYTM4NGMiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-oswald text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ<br />
              <span className="text-primary">ДЛЯ LADA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Широкий ассортимент запчастей для всех моделей LADA. Гарантия качества и быстрая доставка по России.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => onNavigate('catalog')} className="font-oswald text-lg">
                ПЕРЕЙТИ В КАТАЛОГ
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('contacts')} className="font-oswald text-lg">
                СВЯЗАТЬСЯ С НАМИ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Wrench" className="text-primary" size={24} />
              </div>
              <h3 className="font-oswald text-xl font-semibold mb-2">Более 10 000 товаров</h3>
              <p className="text-muted-foreground">
                Широкий ассортимент оригинальных и аналоговых запчастей для всех моделей LADA
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Truck" className="text-primary" size={24} />
              </div>
              <h3 className="font-oswald text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">
                Доставка по России от 1 дня. Самовывоз из наших складов в день заказа
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-primary" size={24} />
              </div>
              <h3 className="font-oswald text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">
                Все запчасти сертифицированы. Гарантия на оригинальные детали от производителя
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-12">
            ПОПУЛЯРНЫЕ КАТЕГОРИИ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Двигатель', icon: 'Cog' },
              { name: 'Подвеска', icon: 'Gauge' },
              { name: 'Тормоза', icon: 'CircleSlash' },
              { name: 'Кузов', icon: 'Box' },
              { name: 'Электрика', icon: 'Zap' },
              { name: 'Салон', icon: 'Armchair' },
              { name: 'Трансмиссия', icon: 'Settings' },
              { name: 'Масла', icon: 'Droplets' },
            ].map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1"
                onClick={() => onNavigate('catalog')}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-oswald font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="max-w-2xl">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-4">
              АКЦИЯ! СКИДКА 15% НА ПЕРВЫЙ ЗАКАЗ
            </h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Зарегистрируйтесь и получите персональную скидку на все товары в каталоге
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('catalog')}
              className="font-oswald text-lg"
            >
              ВОСПОЛЬЗОВАТЬСЯ СКИДКОЙ
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="font-oswald text-3xl md:text-4xl font-bold text-center mb-12">
          ПОЧЕМУ ВЫБИРАЮТ НАС
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Check" className="text-primary" size={20} />
              </div>
            </div>
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-2">Работаем с 2005 года</h3>
              <p className="text-muted-foreground">
                19 лет успешной работы на рынке автозапчастей
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Check" className="text-primary" size={20} />
              </div>
            </div>
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-2">Собственные склады</h3>
              <p className="text-muted-foreground">
                Складские комплексы в 15 городах России
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Check" className="text-primary" size={20} />
              </div>
            </div>
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-2">Профессиональные консультации</h3>
              <p className="text-muted-foreground">
                Поможем подобрать нужные запчасти по VIN-коду
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Check" className="text-primary" size={20} />
              </div>
            </div>
            <div>
              <h3 className="font-oswald text-lg font-semibold mb-2">Выгодные цены</h3>
              <p className="text-muted-foreground">
                Прямые поставки от производителей, без наценок посредников
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
