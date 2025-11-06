import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const BankCard = ({ type, imageUrl }: { type: string; imageUrl: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer shadow-2xl"
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={`${type} card`}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="text-white text-2xl font-bold tracking-wider drop-shadow-lg">ФПИ</div>
        </div>
        
        <div>
          <div className="text-white/90 text-xs mb-2 tracking-wide drop-shadow">Номер карты</div>
          <div className="text-white font-mono text-xl tracking-[0.3em] mb-6 drop-shadow-lg">
            {type === "Black" ? "•••• •••• •••• 0001" : 
             type === "Premium" ? "•••• •••• •••• 9999" : 
             "•••• •••• •••• 5678"}
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <div className="text-white/90 text-xs mb-1 drop-shadow">Владелец</div>
              <div className="text-white font-semibold tracking-wide drop-shadow-lg">ИВАН ИВАНОВ</div>
            </div>
            <div className="text-right">
              <div className="text-white/90 text-xs mb-1 drop-shadow">Срок</div>
              <div className="text-white font-semibold drop-shadow-lg">12/28</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">Ф</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">ФПИ</div>
              <div className="text-xs text-muted-foreground">Банк будущего</div>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#cards" className="text-foreground hover:text-primary transition-colors font-medium">Карты</a>
            <a href="#tariffs" className="text-foreground hover:text-primary transition-colors font-medium">Тарифы</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 shadow-lg">
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </nav>

      <section className="pt-20 pb-32 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Icon name="Gamepad2" size={14} className="mr-1" />
                Игровая валюта
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Игровая
                <br />
                <span className="text-primary">валюта</span>
                <br />
                ФПИ
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Пополняйте игровой счёт быстро и безопасно. Покупайте Shark Cards и получайте дополнительные бонусы при акциях.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 shadow-lg">
                  Купить Shark Card
                  <Icon name="ShoppingCart" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 border-2 hover:bg-secondary">
                  Посмотреть пакеты
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">10М+</div>
                  <div className="text-sm text-muted-foreground">Игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">↑ 35%</div>
                  <div className="text-sm text-muted-foreground">Бонус</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
              <div className="relative">
                <BankCard 
                  type="Premium" 
                  imageUrl="https://cdn.poehali.dev/projects/b76f1abe-44c6-4373-9987-04dd2f22d880/files/acd15cd7-9fa7-4223-9947-bcd6f9c6b227.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cards" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Продукты
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-foreground">🦈 Shark Cards</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Выберите пакет игровой валюты — от новичка до кита
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <BankCard 
                type="Classic" 
                imageUrl="https://cdn.poehali.dev/projects/b76f1abe-44c6-4373-9987-04dd2f22d880/files/d48d9e65-38d4-45c2-82e3-1c027f327222.jpg"
              />
              <Card className="mt-8 p-8 bg-card border-2 border-border group-hover:border-primary/50 transition-all hover:shadow-xl">
                <h3 className="text-3xl font-bold mb-3 text-foreground">🦈 Tiger Shark</h3>
                <p className="text-muted-foreground mb-6 text-lg">Базовый игровой пакет</p>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-primary mb-1">200,000₽</div>
                  <div className="text-sm text-muted-foreground">игровая валюта</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">200,000 игровых денег</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Мгновенное пополнение</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Отлично для старта</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Оформить
                </Button>
              </Card>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>
              <div className="relative">
                <BankCard 
                  type="Premium" 
                  imageUrl="https://cdn.poehali.dev/projects/b76f1abe-44c6-4373-9987-04dd2f22d880/files/de02ef66-4d6a-42d6-a2a6-9abd1b018da9.jpg"
                />
                <Card className="mt-8 p-8 bg-card border-2 border-primary group-hover:border-primary transition-all shadow-xl">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-3xl font-bold text-foreground">🦈 Megalodon Shark</h3>
                    <Badge className="bg-primary text-white">Популярно</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">Максимальная мощь</p>
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-primary mb-1">8,000,000₽</div>
                    <div className="text-sm text-muted-foreground">игровая валюта</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">8,000,000 игровых денег</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">+35% бонус при акции</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Лучшее соотношение цены</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Оформить
                  </Button>
                </Card>
              </div>
            </div>
            
            <div className="group">
              <BankCard 
                type="Black" 
                imageUrl="https://cdn.poehali.dev/projects/b76f1abe-44c6-4373-9987-04dd2f22d880/files/b034d709-954c-431e-8369-3a78a9818a20.jpg"
              />
              <Card className="mt-8 p-8 bg-card border-2 border-border group-hover:border-primary/50 transition-all hover:shadow-xl">
                <h3 className="text-3xl font-bold mb-3 text-foreground">🦈 Great White Shark</h3>
                <p className="text-muted-foreground mb-6 text-lg">Для опытных игроков</p>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-primary mb-1">1,250,000₽</div>
                  <div className="text-sm text-muted-foreground">игровая валюта</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">1,250,000 игровых денег</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Быстрое пополнение счёта</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Популярный выбор</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg py-6">
                  Оформить
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Отзывы
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-foreground">Отзывы игроков</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white border-2 border-border hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "Купил Megalodon Shark и сразу купил себе яхту и бизнес! Лучшее вложение!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">ProGamer2024</div>
                  <div className="text-sm text-muted-foreground">Игрок 2 года</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-white border-2 border-border hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "Бонус +35% при акции — это бомба! Получил на 3 миллиона больше."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">xXDimaXx</div>
                  <div className="text-sm text-muted-foreground">Игрок 1 год</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-white border-2 border-border hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "Быстрое пополнение, деньги на счёте буквально за минуту. Очень удобно!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Lena_Killer</div>
                  <div className="text-sm text-muted-foreground">Игрок 3 года</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground">Преимущества Shark Cards</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 bg-card border-2 border-border hover:border-primary/50 transition-all group hover:shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Безопасно</h3>
              <p className="text-muted-foreground text-lg">
                Официальные Shark Cards с защитой платежей
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-2 border-border hover:border-primary/50 transition-all group hover:shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Icon name="Zap" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Мгновенно</h3>
              <p className="text-muted-foreground text-lg">
                Деньги на игровом счёте за 1 минуту
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-2 border-border hover:border-primary/50 transition-all group hover:shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Icon name="Percent" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Бонусы</h3>
              <p className="text-muted-foreground text-lg">
                +35% к сумме при акциях
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-2 border-border hover:border-primary/50 transition-all group hover:shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Icon name="Headphones" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Поддержка</h3>
              <p className="text-muted-foreground text-lg">
                Круглосуточная помощь клиентам
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Нужны деньги в игре?
          </h2>
          <p className="text-2xl mb-12 max-w-2xl mx-auto opacity-90">
            Купите Shark Card и получите миллионы игровой валюты прямо сейчас
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-16 py-8 shadow-2xl">
            Купить Shark Card
            <Icon name="ShoppingCart" size={24} className="ml-3" />
          </Button>
        </div>
      </section>

      <footer className="py-16 px-6 bg-secondary border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Ф</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">ФПИ</div>
                  <div className="text-xs text-muted-foreground">Банк будущего</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Современные финансовые решения для комфортной жизни
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg text-foreground">Продукты</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Дебетовые карты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредитные карты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вклады</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg text-foreground">Компания</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О банке</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg text-foreground">Поддержка</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 ФПИ Банк. Все права защищены. Генеральная лицензия ЦБ РФ №0000</p>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;