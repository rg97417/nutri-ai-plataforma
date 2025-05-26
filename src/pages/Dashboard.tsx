
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Utensils, 
  Target, 
  TrendingUp, 
  Calendar,
  Flame,
  Apple,
  Dumbbell
} from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DashboardStats {
  todayMeals: number;
  todayCalories: number;
  weeklyWeight: number;
  targetCalories: number;
}

const Dashboard = () => {
  const { profile } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    todayMeals: 0,
    todayCalories: 0,
    weeklyWeight: 0,
    targetCalories: 2000
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Fetch today's meals
      const { data: meals } = await supabase
        .from('meal_records')
        .select('calories')
        .gte('meal_time', today.toISOString())
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

      const todayMeals = meals?.length || 0;
      const todayCalories = meals?.reduce((sum, meal) => sum + (meal.calories || 0), 0) || 0;

      // Calculate target calories based on profile data
      const targetCalories = profile?.tdee || 2000;

      setStats({
        todayMeals,
        todayCalories,
        weeklyWeight: profile?.current_weight || 0,
        targetCalories
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const caloriesProgress = (stats.todayCalories / stats.targetCalories) * 100;

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          {format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Refeições Hoje</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.todayMeals}</div>
            <p className="text-xs text-muted-foreground">
              +1 desde ontem
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calorias Hoje</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(stats.todayCalories)}</div>
            <p className="text-xs text-muted-foreground">
              de {Math.round(stats.targetCalories)} cal meta
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peso Atual</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.weeklyWeight || '--'}kg</div>
            <p className="text-xs text-muted-foreground">
              Meta: {profile?.target_weight || '--'}kg
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Objetivo</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {profile?.goal === 'weight_loss' ? 'Perder Peso' :
               profile?.goal === 'muscle_gain' ? 'Ganhar Massa' :
               profile?.goal === 'maintenance' ? 'Manter Peso' : 'Saúde'}
            </div>
            <p className="text-xs text-muted-foreground">
              {profile?.activity_level || 'Não definido'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5" />
              Progresso de Calorias
            </CardTitle>
            <CardDescription>
              Meta diária de calorias
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Consumidas: {Math.round(stats.todayCalories)} cal</span>
              <span>Meta: {Math.round(stats.targetCalories)} cal</span>
            </div>
            <Progress value={Math.min(caloriesProgress, 100)} className="h-2" />
            <div className="text-xs text-gray-500">
              {caloriesProgress > 100 
                ? `${Math.round(stats.todayCalories - stats.targetCalories)} cal acima da meta`
                : `${Math.round(stats.targetCalories - stats.todayCalories)} cal restantes`
              }
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Atividade Recente
            </CardTitle>
            <CardDescription>
              Últimas atividades registradas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Apple className="h-4 w-4 text-green-600" />
                <span>Café da manhã registrado</span>
                <span className="text-xs text-gray-500 ml-auto">8:30</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Dumbbell className="h-4 w-4 text-blue-600" />
                <span>Perfil atualizado</span>
                <span className="text-xs text-gray-500 ml-auto">Ontem</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Target className="h-4 w-4 text-purple-600" />
                <span>Meta de peso definida</span>
                <span className="text-xs text-gray-500 ml-auto">2 dias</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Welcome Message for New Users */}
      {!profile?.goal && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Bem-vindo ao DietaZap! 🎉</CardTitle>
            <CardDescription className="text-blue-700">
              Complete seu perfil para uma experiência personalizada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-800 mb-4">
              Para começar, defina seus objetivos, peso atual e meta. 
              Isso nos ajudará a calcular suas necessidades calóricas diárias.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                Defina seu objetivo
              </span>
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                Registre seu peso
              </span>
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                Comece a registrar refeições
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
