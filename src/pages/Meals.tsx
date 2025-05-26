
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Utensils, Calendar, Flame } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Tables } from '@/integrations/supabase/types';

type MealRecord = Tables<'meal_records'>;

const Meals = () => {
  const [meals, setMeals] = useState<MealRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const { data, error } = await supabase
        .from('meal_records')
        .select('*')
        .order('meal_time', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching meals:', error);
      } else {
        setMeals(data || []);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMealTypeLabel = (type: string) => {
    const types = {
      breakfast: 'Café da manhã',
      lunch: 'Almoço', 
      dinner: 'Jantar',
      snack: 'Lanche'
    };
    return types[type as keyof typeof types] || type;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Refeições</h1>
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-gray-200 rounded"></div>
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
        <h1 className="text-2xl font-bold text-gray-900">Refeições</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Nova Refeição
        </Button>
      </div>

      {meals.length === 0 ? (
        <Card>
          <CardHeader className="text-center">
            <Utensils className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <CardTitle>Nenhuma refeição registrada</CardTitle>
            <CardDescription>
              Comece registrando sua primeira refeição para acompanhar sua nutrição
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="flex items-center gap-2 mx-auto">
              <Plus className="h-4 w-4" />
              Registrar Primeira Refeição
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {meals.map((meal) => (
            <Card key={meal.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    {getMealTypeLabel(meal.meal_type)}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(meal.meal_time), "dd/MM 'às' HH:mm", { locale: ptBR })}
                    </div>
                    {meal.calories && (
                      <div className="flex items-center gap-1">
                        <Flame className="h-4 w-4" />
                        {Math.round(meal.calories)} cal
                      </div>
                    )}
                  </div>
                </div>
                {meal.description && (
                  <CardDescription>{meal.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Proteína:</span>
                      <div className="font-medium">{meal.protein ? Math.round(meal.protein) : '--'}g</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Carboidrato:</span>
                      <div className="font-medium">{meal.carbs ? Math.round(meal.carbs) : '--'}g</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Gordura:</span>
                      <div className="font-medium">{meal.fat ? Math.round(meal.fat) : '--'}g</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Fibra:</span>
                      <div className="font-medium">{meal.fiber ? Math.round(meal.fiber) : '--'}g</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meals;
