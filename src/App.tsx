import Container from 'components/Container/Container';
import TheHeader from 'components/TheHeader/TheHeader';
import Search from 'components/Search/Search';
import UserCard from 'components/UserCard/UserCard';
import { defaultUser } from 'mock';
import { GitHubError, GitHubUser, LocalGitHubUser } from 'types';
import { useState } from 'react';
import { isGithubUser } from 'utils/typeguards';
import { extractLocalUser } from 'utils/extract-local-user';
import './App.scss';

const BASE_URL = 'https://api.github.com/users/';

function App() {
    const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;

        const res = await fetch(url);
        const user = (await res.json()) as GitHubUser | GitHubError;

        if (isGithubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null);
        }
    };

    return (
        <Container>
            <TheHeader />
            <Search hasError={!user} onSubmit={fetchUser} />
            {user && <UserCard {...user} />}
        </Container>
    );
}

export default App;
