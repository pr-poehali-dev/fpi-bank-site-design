import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const BankCard = ({ type, gradient, icon }: { type: string; gradient: string; icon: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative w-full aspect-[1.586/1] rounded-2xl p-6 transition-all duration-500 cursor-pointer ${gradient} shadow-2xl`}
      style={{
        transform: isHovered ? 'rotateY(5deg) rotateX(5deg) scale(1.05)' : 'rotateY(0deg) rotateX(0deg) scale(1)',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm"></div>
      
      <div className="relative h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="text-white/90 text-sm font-semibold tracking-wider">ФПИ БАНК</div>
          <Icon name={icon as any} className="text-white/80" size={32} />
        </div>
        
        <div>
          <div className="text-white/70 text-xs mb-1 tracking-wide">Номер карты</div>
          <div className="text-white font-mono text-lg tracking-wider mb-4">
            {type === "Black" ? "•••• •••• •••• 0001" : 
             type === "Premium" ? "•••• •••• •••• 9999" : 
             "•••• •••• •••• 5678"}
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <div className="text-white/70 text-xs mb-1">Владелец</div>
              <div className="text-white font-medium tracking-wide text-sm">IVAN IVANOV</div>
            </div>
            <div className="text-right">
              <div className="text-white/70 text-xs mb-1">Срок</div>
              <div className="text-white font-medium text-sm">12/28</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-6 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 blur-2xl"></div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Landmark" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">ФПИ</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#cards" className="text-muted-foreground hover:text-foreground transition-colors">Карты</a>
            <a href="#tariffs" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О банке</a>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90">
            Открыть счет
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                <Icon name="Zap" size={14} className="mr-1" />
                Финансы будущего
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Банк нового
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  поколения
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Современные банковские решения с кэшбэком до 20%, моментальными переводами и премиальным сервисом 24/7
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Заказать карту
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-secondary">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">2.5М+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">0₽</div>
                  <div className="text-sm text-muted-foreground">Обслуживание</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
              <div className="relative space-y-6">
                <BankCard 
                  type="Black" 
                  gradient="bg-gradient-to-br from-gray-900 via-gray-800 to-black"
                  icon="Crown"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cards" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Наши продукты
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Выберите свою карту</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Три уровня премиального обслуживания для разных потребностей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <BankCard 
                type="Classic" 
                gradient="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
                icon="CreditCard"
              />
              <Card className="mt-6 p-6 bg-card border-border group-hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Classic</h3>
                <p className="text-muted-foreground mb-4">Для повседневных покупок</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    Кэшбэк 3%
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    Бесплатное обслуживание
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    Снятие в любых банкоматах
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Оформить
                </Button>
              </Card>
            </div>
            
            <div className="group">
              <BankCard 
                type="Premium" 
                gradient="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600"
                icon="Gem"
              />
              <Card className="mt-6 p-6 bg-card border-border group-hover:border-accent/50 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-muted-foreground mb-4">Расширенные возможности</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    Кэшбэк 10%
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    Priority поддержка
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    Страхование покупок
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90 text-background">
                  Оформить
                </Button>
              </Card>
            </div>
            
            <div className="group">
              <BankCard 
                type="Black" 
                gradient="bg-gradient-to-br from-gray-900 via-gray-800 to-black"
                icon="Crown"
              />
              <Card className="mt-6 p-6 bg-card border-border group-hover:border-accent/50 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Black</h3>
                <p className="text-muted-foreground mb-4">Максимальная привилегия</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    Кэшбэк 20%
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    Консьерж-сервис
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    VIP залы в аэропортах
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90">
                  Оформить
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Shield" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">
                Защита по стандартам PCI DSS и 3D Secure 2.0
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Zap" className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Моментально</h3>
              <p className="text-muted-foreground">
                Переводы между картами за 1 секунду
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Percent" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Выгодно</h3>
              <p className="text-muted-foreground">
                До 20% кэшбэка на все покупки
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Globe" className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Везде</h3>
              <p className="text-muted-foreground">
                Принимаем в 200+ странах мира
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте счет за 5 минут и получите приветственный бонус 1000₽
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Открыть счет бесплатно
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Landmark" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">ФПИ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современный банк для современных людей
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Вклады</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Кредиты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Безопасность</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 ФПИ Банк. Все права защищены. Лицензия ЦБ РФ №0000
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
