import * as React from 'react';
import Sidebar from 'src/Components/Sidebar/sidebar';
import 'src/Containers/Dashboard/dashboard.css';
import { useGlobalContext } from 'src/Context/appContext';

const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const { state } = useGlobalContext();

  React.useEffect(() => {
    if (state.theme && state.theme === 'dark') setDarkMode(true);
    else setDarkMode(false);
  }, [state.theme]);
  return (
    <main
      className={`${
        darkMode ? 'dark-mode-bg' : 'light-mode-bg'
      } transition ease-in-out grid grid-cols-[250px_1fr] h-full`}
    >
      <Sidebar />
      <div className='pl-5'>Hi</div>
    </main>
  );
};

export default Dashboard;
