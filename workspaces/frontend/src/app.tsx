
import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./components/users/users";
import { MainPage, TopTabs } from "./style/style";
import { Recipes } from "./components/recipes/recipes";

const queryClient = new QueryClient()

export const App =()=> {
  
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage>
        <TopTabs> 
            <Users/>
        </TopTabs>
        <Recipes/>
      </MainPage>
    </QueryClientProvider>
  );
}
