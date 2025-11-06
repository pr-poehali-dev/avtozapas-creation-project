import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface DeliveryPageProps {
  onNavigate: (page: string) => void;
}

const DeliveryPage = ({ onNavigate }: DeliveryPageProps) => {
  return (
    <div className="container py-8">
      <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-8">ОПЛАТА И ДОСТАВКА</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-oswald text-2xl font-bold mb-6">СПОСОБЫ ДОСТАВКИ</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Truck" className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-oswald text-xl font-semibold mb-2">Курьерская доставка</h3>
                  <p className="text-muted-foreground mb-3">
                    Доставим заказ прямо к вашей двери. Работаем по всей России.
                  </p>
                  <div className="bg-muted/40 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>По Тольятти</span>
                      <span className="font-semibold">300 ₽ (бесплатно от 3 000 ₽)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>По России</span>
                      <span className="font-semibold">500 ₽ (бесплатно от 5 000 ₽)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Срок доставки</span>
                      <span className="font-semibold">1-3 дня</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Package" className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-oswald text-xl font-semibold mb-2">Пункты выдачи</h3>
                  <p className="text-muted-foreground mb-3">
                    Забирайте заказы в удобных для вас пунктах выдачи в вашем городе.
                  </p>
                  <div className="bg-muted/40 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Стоимость</span>
                      <span className="font-semibold">250 ₽ (бесплатно от 3 000 ₽)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Срок доставки</span>
                      <span className="font-semibold">2-5 дней</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Пунктов выдачи</span>
                      <span className="font-semibold">Более 5000 по России</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Store" className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-oswald text-xl font-semibold mb-2">Самовывоз</h3>
                  <p className="text-muted-foreground mb-3">
                    Забирайте заказ с наших складов в день оформления.
                  </p>
                  <div className="bg-muted/40 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Стоимость</span>
                      <span className="font-semibold text-green-600">Бесплатно</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Готовность заказа</span>
                      <span className="font-semibold">В день заказа</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Складов в России</span>
                      <span className="font-semibold">15 городов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="font-oswald text-2xl font-bold mb-6">СПОСОБЫ ОПЛАТЫ</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="CreditCard" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Банковская карта</h3>
                  <p className="text-sm text-muted-foreground">
                    Visa, MasterCard, МИР. Безопасная оплата онлайн при оформлении заказа.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Wallet" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Наличные</h3>
                  <p className="text-sm text-muted-foreground">
                    Оплата наличными курьеру при получении заказа или в пункте выдачи.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Building" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Безналичный расчет</h3>
                  <p className="text-sm text-muted-foreground">
                    Для юридических лиц. Оплата по счету с НДС. Работаем с НДС и без НДС.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Smartphone" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Электронные кошельки</h3>
                  <p className="text-sm text-muted-foreground">
                    СБП, Яндекс.Деньги и другие популярные платежные системы.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Icon name="Shield" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-oswald font-semibold mb-2">Безопасность</h3>
              <p className="text-sm text-muted-foreground">
                Все платежи защищены SSL-сертификатом
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Icon name="Clock" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-oswald font-semibold mb-2">Быстрая отправка</h3>
              <p className="text-sm text-muted-foreground">
                Заказы до 14:00 отправляем в тот же день
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Icon name="RefreshCw" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-oswald font-semibold mb-2">Возврат</h3>
              <p className="text-sm text-muted-foreground">
                Возврат товара в течение 14 дней
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="font-oswald text-2xl font-bold mb-6">ВАЖНАЯ ИНФОРМАЦИЯ</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Проверка товара при получении</h3>
                  <p className="text-sm text-muted-foreground">
                    Вы можете проверить комплектность и целостность заказа при получении,
                    до оплаты курьеру или в пункте выдачи.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Документы к заказу</h3>
                  <p className="text-sm text-muted-foreground">
                    К каждому заказу прилагается товарный чек и гарантийный талон.
                    Для юридических лиц предоставляем полный пакет документов.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Отслеживание заказа</h3>
                  <p className="text-sm text-muted-foreground">
                    После отправки вы получите трек-номер для отслеживания посылки.
                    SMS и email уведомления на всех этапах доставки.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Срочная доставка</h3>
                  <p className="text-sm text-muted-foreground">
                    Для срочных заказов доступна экспресс-доставка в течение 24 часов.
                    Подробности уточняйте у менеджера.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-primary-foreground text-center">
          <h2 className="font-oswald text-3xl font-bold mb-4">ОСТАЛИСЬ ВОПРОСЫ?</h2>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Свяжитесь с нами любым удобным способом, и мы поможем оформить заказ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+78005553535" className="flex items-center gap-2 text-lg font-semibold hover:underline">
              <Icon name="Phone" size={20} />
              +7 (800) 555-35-35
            </a>
            <span className="text-primary-foreground/40">|</span>
            <a href="mailto:info@avtovaz-parts.ru" className="flex items-center gap-2 text-lg font-semibold hover:underline">
              <Icon name="Mail" size={20} />
              info@avtovaz-parts.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
