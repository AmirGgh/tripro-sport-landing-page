
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Activity, 
  Users, 
  Brain, 
  CreditCard, 
  Smartphone, 
  Clock,
  CheckCircle,
  Quote
} from 'lucide-react';

declare global {
  interface Window {
    anime: any;
  }
}

const Homepage = () => {
  useEffect(() => {
    // Wait for anime.js to load
    const initAnimations = () => {
      if (typeof window.anime !== 'undefined') {
        // Hero animations
        window.anime({
          targets: '.hero-title',
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
          easing: 'easeOutQuart',
          delay: 300
        });

        window.anime({
          targets: '.hero-subtitle',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutQuart',
          delay: 600
        });

        window.anime({
          targets: '.hero-cta',
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 600,
          easing: 'easeOutBack',
          delay: 900
        });

        // Feature cards stagger animation
        window.anime({
          targets: '.feature-card',
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 800,
          easing: 'easeOutQuart',
          delay: window.anime.stagger(200, {start: 1200})
        });

        // Phone mockup animation
        window.anime({
          targets: '.phone-mockup',
          opacity: [0, 1],
          translateX: [50, 0],
          duration: 1000,
          easing: 'easeOutQuart',
          delay: 1500
        });

        // Quote animation
        window.anime({
          targets: '.quote-section',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutQuart',
          delay: 1800
        });
      }
    };

    const timer = setTimeout(initAnimations, 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Activity,
      title: "תיעוד תוצאות חכם",
      description: "מעקב אחר התקדמות המתאמנים עם כלים מתקדמים ודוחות מפורטים",
      color: "tripro-green"
    },
    {
      icon: Brain,
      title: "עוזר AI לבניית תוכנית אימון",
      description: "בינה מלאכותית שעוזרת לך לבנות תוכניות אימון מותאמות אישית",
      color: "tripro-light-blue-new"
    },
    {
      icon: CreditCard,
      title: "מעקב תשלומים למתאמנים",
      description: "ניהול תשלומים פשוט ושקוף עם התראות אוטומטיות",
      color: "tripro-orange"
    }
  ];

  const faqItems = [
    {
      question: "מה כוללת המערכת?",
      answer: "המערכת כוללת ניהול מתאמנים, תוכניות אימון, מעקב תוצאות, ניהול תשלומים ועוד."
    },
    {
      question: "איך מצטרפים?",
      answer: "הרשמה פשוטה דרך האתר, עם תקופת ניסיון חינמית של 30 יום."
    },
    {
      question: "האם יש גרסה למתאמנים?",
      answer: "כן! המתאמנים מקבלים אפליקציה נפרדת לצפייה בתוכניות ותוצאות."
    },
    {
      question: "כמה עולה?",
      answer: "מחירים מותאמים לגודל הקבוצה, החל מ-99₪ לחודש."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient dark:hero-gradient-dark min-h-screen flex items-center justify-center relative">
          <div 
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 brand-text">
              TRIPRO
            </h1>
            <p className="hero-title text-2xl md:text-3xl text-white/90 mb-4 opacity-0">
              המערכת שתשדרג את הקבוצה שלך
            </p>
            <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto opacity-0">
              תוכניות אימון, נוכחות, תוצאות ותשלומים – הכל במקום אחד
            </p>
            <Button 
              className="hero-cta cta-button text-lg opacity-0"
              onClick={() => window.open('https://app.triprosystem.com', '_blank')}
            >
              כניסה לאפליקציה ←
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              כל מה שאתה צריך כמאמן
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              כלים מתקדמים שיעזרו לך לנהל את הקבוצה ביעילות מקסימלית
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card opacity-0">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${feature.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockup Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="phone-mockup opacity-0">
              <div className="relative mx-auto w-80 h-[600px] bg-foreground rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  <div className="hero-gradient h-20 flex items-center justify-center">
                    <span className="text-white font-bold text-xl brand-text">TRIPRO</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">אימון השבוע</span>
                      <Badge className="bg-tripro-green text-white">5 משתתפים</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded-full">
                        <div className="h-3 bg-tripro-orange rounded-full w-3/4"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">התקדמות: 75%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-tripro-light-blue-new/10 rounded-lg text-center">
                        <Activity className="w-6 h-6 text-tripro-light-blue-new mx-auto mb-2" />
                        <span className="text-sm font-medium text-foreground">תוצאות</span>
                      </div>
                      <div className="p-4 bg-tripro-green/10 rounded-lg text-center">
                        <Users className="w-6 h-6 text-tripro-green mx-auto mb-2" />
                        <span className="text-sm font-medium text-foreground">נוכחות</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                כל מה שאתה צריך כמאמן –<br />
                אצלך בכיס
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-tripro-green flex-shrink-0" />
                  <span className="text-muted-foreground">גישה לכל הנתונים בזמן אמת</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-tripro-green flex-shrink-0" />
                  <span className="text-muted-foreground">ממשק פשוט וידידותי למשתמש</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-tripro-green flex-shrink-0" />
                  <span className="text-muted-foreground">עדכונים אוטומטיים למתאמנים</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-tripro-green flex-shrink-0" />
                  <span className="text-muted-foreground">גיבוי אוטומטי של כל המידע</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Images Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            לכל סוגי הספורט
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                alt="טריאתלון - ריצה"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tripro-green/80 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-6">ריצה וטריאתלון</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                alt="שחייה"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tripro-light-blue-new/80 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-6">שחייה</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80"
                alt="רכיבה על אופניים"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tripro-orange/80 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-6">רכיבה על אופניים</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center quote-section opacity-0">
            <Quote className="w-16 h-16 text-tripro-orange mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl text-foreground font-medium mb-8 leading-relaxed">
              "המערכת חסכה לי שעות של עבודה משרדית. סוף־סוף אני רק מאמן."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-tripro-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ד</span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">דביר כהן</p>
                <p className="text-muted-foreground">מאמן טריאתלון, מכבי תל אביב</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            שאלות נפוצות
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="feature-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 brand-text">TRIPRO</h3>
            <div className="flex justify-center gap-8 mb-8 text-sm">
              <a href="#" className="hover:text-tripro-green transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-tripro-orange transition-colors">צור קשר</a>
              <a href="#" className="hover:text-tripro-light-blue-new transition-colors">מדיניות פרטיות</a>
            </div>
            <p className="text-background/60 text-sm">
              © 2025 כל הזכויות שמורות ל־TRIPRO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
