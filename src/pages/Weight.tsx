
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Weight as WeightIcon, TrendingUp, TrendingDown } from 'lucide-react';

const Weight = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Controle de Peso</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Registrar Peso
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peso Atual</CardTitle>
            <WeightIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--kg</div>
            <p className="text-xs text-muted-foreground">
              Último registro: --
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meta</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--kg</div>
            <p className="text-xs text-muted-foreground">
              --kg para atingir meta
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--%</div>
            <p className="text-xs text-muted-foreground">
              do objetivo alcançado
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="text-center">
          <WeightIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <CardTitle>Nenhum registro de peso</CardTitle>
          <CardDescription>
            Comece registrando seu peso atual para acompanhar seu progresso
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button className="flex items-center gap-2 mx-auto">
            <Plus className="h-4 w-4" />
            Registrar Primeiro Peso
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Weight;
