import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ContactsPageProps {
  onNavigate: (page: string) => void;
}

const ContactsPage = ({ onNavigate }: ContactsPageProps) => {
  return (
    <div className="container py-8">
      <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-8">КОНТАКТЫ</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-oswald text-lg font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground mb-1">Звоните нам с 8:00 до 22:00</p>
                  <a href="tel:+78005553535" className="text-xl font-semibold text-primary hover:underline">
                    +7 (800) 555-35-35
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Звонок по России бесплатный</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-oswald text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-1">Напишите нам</p>
                  <a href="mailto:info@avtovaz-parts.ru" className="text-lg font-semibold text-primary hover:underline">
                    info@avtovaz-parts.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-oswald text-lg font-semibold mb-2">Адрес офиса</h3>
                  <p className="text-muted-foreground">
                    г. Тольятти, Автозаводский район<br />
                    ул. Автостроителей, д. 45, офис 201
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб-Вс: выходной
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-oswald text-lg font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/40">
            <CardContent className="pt-6">
              <h3 className="font-oswald text-lg font-semibold mb-4">Наши склады</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary flex-shrink-0" size={16} />
                  <span>Москва, Санкт-Петербург, Казань</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary flex-shrink-0" size={16} />
                  <span>Екатеринбург, Новосибирск, Краснодар</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary flex-shrink-0" size={16} />
                  <span>Самара, Нижний Новгород, Ростов-на-Дону</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary flex-shrink-0" size={16} />
                  <span>Челябинск, Уфа, Воронеж</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="font-oswald text-2xl font-bold mb-6">НАПИШИТЕ НАМ</h2>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                <Input placeholder="Иван Иванов" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Телефон</label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="example@mail.ru" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Тема обращения</label>
                <Input placeholder="Вопрос о наличии запчасти" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea
                  placeholder="Опишите ваш вопрос или пожелание..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-oswald text-lg">
                ОТПРАВИТЬ СООБЩЕНИЕ
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 bg-muted/40 rounded-lg p-8">
        <h2 className="font-oswald text-2xl font-bold mb-6 text-center">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2">Как оформить заказ?</h3>
            <p className="text-sm text-muted-foreground">
              Добавьте нужные запчасти в корзину и оформите заказ онлайн,
              либо позвоните нам по телефону — мы поможем с выбором.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Какие способы оплаты доступны?</h3>
            <p className="text-sm text-muted-foreground">
              Оплата картой онлайн, наличными при получении,
              безналичный расчет для юридических лиц.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Есть ли гарантия на запчасти?</h3>
            <p className="text-sm text-muted-foreground">
              Да, на все оригинальные запчасти действует гарантия производителя.
              Срок гарантии указан в документации к товару.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Можно ли вернуть товар?</h3>
            <p className="text-sm text-muted-foreground">
              Возврат качественного товара возможен в течение 14 дней,
              если он не был в использовании и сохранена упаковка.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
