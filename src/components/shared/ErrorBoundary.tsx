import { Component, type ReactNode } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error('Error Boundary Caught:', error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload(); // reload current page
  };

  handleRedirect = () => {
    window.location.href = '/'; // navigate to home
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role='alert'
          className='alert alert-error alert-soft alert-vertical sm:alert-horizontal lg:w-1/2 mx-auto my-6'
        >
          <ExclamationTriangleIcon className='stroke-red-700 h-6 w-6 shrink-0' />
          <div>
            <h3 className='font-bold text-red-700 mb-2'>
              Oops! Something went wrong.
            </h3>
            <div className='text-xs text-gray-600'>
              An unexpected error occurred while rendering the app.
            </div>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={this.handleRetry}
              className='btn btn-sm btn-neutral'
            >
              Retry
            </button>
            <button
              onClick={this.handleRedirect}
              className='btn btn-sm btn-outline'
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
