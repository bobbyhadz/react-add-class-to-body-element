import './App.css';

import {useEffect} from 'react';

import './App.css';

export default function App() {
  useEffect(() => {
    // 👇 Add a class to the body element
    document.body.classList.add('bg-salmon');

    // 👇️ Adding multiple classes to the body element
    document.body.classList.add(
      'bg-salmon',
      'my-class-1',
      'my-class-2',
      'my-class-3',
    );

    // 👇️ Removing classes from the body element
    document.body.classList.remove('my-class-3');

    // 👇️ Checking if the body element contains a class
    if (document.body.classList.contains('bg-salmon')) {
      console.log('body tag contains class');
    }
  }, []);

  return (
    <div>
      <h2>bobbyhadz.com</h2>
    </div>
  );
}
