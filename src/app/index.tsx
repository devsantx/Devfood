import { Text, View, ScrollView } from 'react-native';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Search } from '../components/search';
import { Section } from '../components/section';
import { TrendingFoods } from '../components/trending';
import { Restaurants } from '../components/restaurants';
import Constants from 'expo-constants';
import { RestaurantsVerticalList } from '../components/list';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 12 }}>
        <Header />

        <Banner />

        <Search />
      </View>

      <Section
        name="Comidas em Alta"
        label="Veja Mais"
        action={() => console.log('CLICOU NO VEJA MAIS')}
        size="text-2xl"
      />

      <TrendingFoods />

      <Section
        name="Comidas Novas"
        label="Veja Mais"
        action={() => console.log('CLICOU NO VEJA MAIS')}
        size="text-2xl"
      />

      <TrendingFoods />

      <Section
        name="Famosos no DevFood"
        label="Veja todos"
        action={() => console.log('CLICOU NO VEJA TODOS')}
        size="text-xl"
      />

      <Restaurants />

      <Section
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log('CLICOU NO RESTAURANTES')}
        size="text-xl"
      />

      <RestaurantsVerticalList />
    </ScrollView>
  );
}
