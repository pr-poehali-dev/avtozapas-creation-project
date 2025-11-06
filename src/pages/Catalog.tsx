import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { CartItem } from '@/App';

interface CatalogPageProps {
  onNavigate: (page: string) => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const products = [
  {
    id: 1,
    name: 'Масляный фильтр 2108-1012005',
    price: 450,
    category: 'Двигатель',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
    inStock: true,
  },
  {
    id: 2,
    name: 'Тормозные колодки передние',
    price: 1250,
    category: 'Тормоза',
    image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400',
    inStock: true,
  },
  {
    id: 3,
    name: 'Амортизатор передний SS20',
    price: 3200,
    category: 'Подвеска',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    inStock: true,
  },
  {
    id: 4,
    name: 'Свечи зажигания NGK (комплект)',
    price: 890,
    category: 'Двигатель',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400',
    inStock: true,
  },
  {
    id: 5,
    name: 'Воздушный фильтр салона',
    price: 650,
    category: 'Салон',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400',
    inStock: true,
  },
  {
    id: 6,
    name: 'Масло моторное 5W-40 4л',
    price: 1850,
    category: 'Масла',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400',
    inStock: true,
  },
  {
    id: 7,
    name: 'Фара передняя правая',
    price: 4500,
    category: 'Кузов',
    image: 'https://images.unsplash.com/photo-1449130015084-2213e07af77a?w=400',
    inStock: true,
  },
  {
    id: 8,
    name: 'Ремень ГРМ',
    price: 1150,
    category: 'Двигатель',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
    inStock: true,
  },
];

const categories = ['Все', 'Двигатель', 'Тормоза', 'Подвеска', 'Кузов', 'Салон', 'Масла'];

const CatalogPage = ({ addToCart }: CatalogPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-8">
      <h1 className="font-oswald text-4xl md:text-5xl font-bold mb-8">КАТАЛОГ ЗАПЧАСТЕЙ</h1>

      <div className="mb-8">
        <div className="relative max-w-md">
          <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="Поиск запчастей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <Icon name="Package" className="mx-auto mb-4 text-muted-foreground" size={64} />
          <h3 className="font-oswald text-2xl font-semibold mb-2">Товары не найдены</h3>
          <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-oswald text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                {product.inStock && (
                  <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
                    <Icon name="Check" size={16} />
                    <span>В наличии</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    image: product.image,
                  })}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
