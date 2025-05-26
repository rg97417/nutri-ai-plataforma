
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Activity, Flame, Users } from 'lucide-react';

const Goals = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Objetivos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Objetivo Principal
            </CardTitle>
            <CardDescription>
              Defina seu objetivo de saúde
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Perder Peso</h4>
                <p className="text-sm text-gray-600">Reduzir peso de forma saudável</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Ganhar Massa Muscular</h4>
                <p className="text-sm text-gray-600">Aumentar massa magra</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Manter Peso</h4>
                <p className="text-sm text-gray-600">Manter peso atual</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Melhorar Saúde</h4>
                <p className="text-sm text-gray-600">Foco em hábitos saudáveis</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Nível de Atividade
            </CardTitle>
            <CardDescription>
              Informe seu nível de atividade física
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Sedentário</h4>
                <p className="text-sm text-gray-600">Pouco ou nenhum exercício</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Levemente Ativo</h4>
                <p className="text-sm text-gray-600">Exercício leve 1-3 dias/semana</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Moderadamente Ativo</h4>
                <p className="text-sm text-gray-600">Exercício moderado 3-5 dias/semana</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium">Muito Ativo</h4>
                <p className="text-sm text-gray-600">Exercício intenso 6-7 dias/semana</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="h-5 w-5" />
            Metas Diárias
          </CardTitle>
          <CardDescription>
            Configure suas metas nutricionais diárias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <h4 className="font-medium">Calorias</h4>
              <div className="text-2xl font-bold text-orange-600">2000</div>
              <p className="text-xs text-gray-600">kcal/dia</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <h4 className="font-medium">Proteínas</h4>
              <div className="text-2xl font-bold text-blue-600">150</div>
              <p className="text-xs text-gray-600">g/dia</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <h4 className="font-medium">Carboidratos</h4>
              <div className="text-2xl font-bold text-green-600">250</div>
              <p className="text-xs text-gray-600">g/dia</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <h4 className="font-medium">Gorduras</h4>
              <div className="text-2xl font-bold text-purple-600">65</div>
              <p className="text-xs text-gray-600">g/dia</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Goals;
