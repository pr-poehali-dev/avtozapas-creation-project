import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  return (
    <div className="container py-8">
      <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-8">О КОМПАНИИ</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg">
                <strong>АВТОВАЗ ЗАПЧАСТИ</strong> — это надежный поставщик оригинальных и качественных запчастей
                для автомобилей LADA с 2005 года. За 19 лет работы мы завоевали доверие тысяч клиентов
                по всей России благодаря высокому качеству товаров и профессиональному обслуживанию.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Target" className="text-primary" size={24} />
              </div>
              <h3 className="font-oswald text-xl font-semibold mb-3">Наша миссия</h3>
              <p className="text-muted-foreground">
                Обеспечить доступность качественных запчастей для каждого владельца автомобиля LADA,
                предлагая честные цены и быструю доставку в любую точку России.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Award" className="text-primary" size={24} />
              </div>
              <h3 className="font-oswald text-xl font-semibold mb-3">Наши ценности</h3>
              <p className="text-muted-foreground">
                Качество, надежность, профессионализм и забота о клиентах — основа нашей работы.
                Мы гарантируем подлинность каждой детали и ответственно подходим к каждому заказу.
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="bg-muted/40 rounded-lg p-8">
          <h2 className="font-oswald text-3xl font-bold mb-8 text-center">НАШИ ПРЕИМУЩЕСТВА</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-primary-foreground" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-lg font-semibold mb-2">10 000+ товаров</h3>
                <p className="text-muted-foreground">
                  Широкий ассортимент запчастей для всех моделей LADA в наличии
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" className="text-primary-foreground" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-lg font-semibold mb-2">15 складов</h3>
                <p className="text-muted-foreground">
                  Собственные складские комплексы в крупных городах России
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Users" className="text-primary-foreground" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-lg font-semibold mb-2">50 000+ клиентов</h3>
                <p className="text-muted-foreground">
                  Довольных покупателей по всей России доверяют нам
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Clock" className="text-primary-foreground" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-lg font-semibold mb-2">Доставка от 1 дня</h3>
                <p className="text-muted-foreground">
                  Быстрая отправка заказов, работаем без выходных
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-primary-foreground" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-lg font-semibold mb-2">100% оригинал</h3>
                <p className="text-muted-foreground">
                  Все запчасти сертифицированы и имеют гарантию качества
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Headphones" className="text-primary-foreground" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-oswald text-lg font-semibold mb-2">Поддержка 24/7</h3>
                <p className="text-muted-foreground">
                  Профессиональная консультация по подбору запчастей
                </p>
              </div>
            </div>
          </div>
        </section>

        <Card>
          <CardContent className="pt-6">
            <h2 className="font-oswald text-2xl font-bold mb-6">КАК МЫ РАБОТАЕМ</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-oswald font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Прямые поставки</h3>
                  <p className="text-muted-foreground">
                    Работаем напрямую с производителями и официальными дистрибьюторами,
                    что позволяет предлагать лучшие цены на рынке
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-oswald font-bold text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Контроль качества</h3>
                  <p className="text-muted-foreground">
                    Каждая партия товара проходит многоступенчатую проверку качества
                    перед отправкой на склады
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-oswald font-bold text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Быстрая обработка</h3>
                  <p className="text-muted-foreground">
                    Заказы, оформленные до 14:00, отправляются в тот же день.
                    Среднее время доставки — 1-3 дня
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-oswald font-bold text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Поддержка после покупки</h3>
                  <p className="text-muted-foreground">
                    Предоставляем гарантию на все товары и консультируем по вопросам
                    установки и эксплуатации
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
