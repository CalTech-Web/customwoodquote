'use client';

import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export function useTutorialDriver() {
  const startTutorial = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: 'a[href="/quotes/new"]',
          popover: {
            title: 'Create New Quote',
            description: 'Click here to start a new quote for a customer project.',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          popover: {
            title: 'Dashboard Overview',
            description: 'Your dashboard shows all your projects, quotes, and important metrics at a glance.'
          }
        },
        {
          element: 'a[href="/settings"]',
          popover: {
            title: 'Settings',
            description: 'Configure your business info, pricing, and material costs here.',
            side: 'bottom',
            align: 'start'
          }
        }
      ]
    });

    driverObj.drive();
  };

  return { startTutorial };
}

export function TutorialButton() {
  const { startTutorial } = useTutorialDriver();

  return (
    <button
      onClick={startTutorial}
      className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
    >
      Start Tutorial
    </button>
  );
}
