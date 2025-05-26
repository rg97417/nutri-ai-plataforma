
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Star, Target, Flame, Calendar, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: 'Primeiro Registro',
      description: 'Registrou sua primeira refeição',
      icon: Target,
      points: 10,
      unlocked: false,
      category: 'Iniciante'
    },
    {
      id: 2,
      name: 'Semana Completa',
      description: 'Registrou refeições por 7 dias consecutivos',
      icon: Calendar,
      points: 50,
      unlocked: false,
      category: 'Consistência'
    },
    {
      id: 3,
      name: 'Meta Calórica',
      description: 'Atingiu sua meta calórica diária',
      icon: Flame,
      points: 25,
      unlocked: false,
      category: 'Nutrição'
    },
    {
      id: 4,
      name: 'Primeira Meta',
      description: 'Atingiu sua primeira meta de peso',
      icon: Award,
      points: 100,
      unlocked: false,
      category: 'Objetivos'
    }
  ];

  const categories = ['Todos', 'Iniciante', 'Consistência', 'Nutrição', 'Objetivos'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Conquistas</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Trophy className="h-4 w-4" />
          <span>0 pontos totais</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Conquistas</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">de {achievements.length} disponíveis</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos Totais</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">pontos conquistados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nível Atual</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Iniciante</div>
            <p className="text-xs text-muted-foreground">próximo nível: 100 pts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-xs text-muted-foreground">conquistas desbloqueadas</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50 bg-white"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon;
          return (
            <Card key={achievement.id} className={`${!achievement.unlocked ? 'opacity-60' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${achievement.unlocked ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                    <IconComponent className={`h-6 w-6 ${achievement.unlocked ? 'text-yellow-600' : 'text-gray-400'}`} />
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {achievement.category}
                  </span>
                </div>
                <CardTitle className="text-lg">{achievement.name}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{achievement.points} pontos</span>
                  </div>
                  {achievement.unlocked ? (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                      Desbloqueada
                    </span>
                  ) : (
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                      Bloqueada
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State for unlocked achievements */}
      <Card className="border-dashed">
        <CardHeader className="text-center">
          <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <CardTitle>Comece sua jornada!</CardTitle>
          <CardDescription>
            Registre sua primeira refeição para desbloquear sua primeira conquista
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Achievements;
