import React from 'react';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
      <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
      <BuggyCounter />
      </ErrorBoundary>

      <BuggyCounter/>

    </div>
  );
}

export default App;
