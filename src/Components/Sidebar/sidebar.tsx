import * as React from 'react';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useGlobalContext } from 'src/Context/appContext';
import { AppContextActionType } from 'src/Context/appReducer';

const Sidebar: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const { state, dispatch } = useGlobalContext();

  React.useEffect(() => {
    if (state?.theme === 'dark') setDarkMode(true);
  }, [state.theme]);
  return (
    <div
      className={`${
        darkMode ? 'bg-gray-800 shadow-[#DDDDDD]' : 'bg-slate-300 shadow-[#455C73]'
      } transition ease-in-out shadow-lg  overflow-y-auto py-4 px-3 bg-gray-50 rounded `}
    >
      <ul className='pl-4 pt-20 h-full relative space-y-6'>
        <li className='flex gap-2 cursor-pointer'>
          <ViewKanbanIcon />
          <span>Board</span>
        </li>
        <li className='flex gap-2 cursor-pointer'>
          <DashboardIcon />
          <span>Dashboard</span>
        </li>
        <li className='flex gap-2 cursor-pointer'>
          <SettingsIcon />
          <span>Settings</span>
        </li>
        <li className='flex gap-4 absolute bottom-14'>
          <div className='flex gap-1'>
            <DarkModeIcon />
            <span>Dark Mode</span>
          </div>
          <label
            htmlFor='default-toggle'
            className='inline-flex relative items-center cursor-pointer'
          >
            <input
              checked={darkMode}
              onChange={(e) => {
                setDarkMode(e.target.checked);
                const theme = e.target.checked ? 'dark' : 'light';
                dispatch({ type: AppContextActionType.SET_THEME, payload: theme });
              }}
              type='checkbox'
              value=''
              id='default-toggle'
              className='sr-only peer'
            />
            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
