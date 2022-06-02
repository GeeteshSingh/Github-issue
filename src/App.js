import './App.css';
//components
import NavigationPanel from "./Components/NavigationPanel";
import ContainerView from "./Components/Container";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationPanel/>
            <ContainerView />
            <ReactQueryDevtools initialIsOpen={false} />

        </QueryClientProvider>
    );
}

export default App;
