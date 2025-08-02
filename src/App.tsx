import './App.css';

export default function App() {
  return (
    <div className='min-h-screen bg-base-200 flex items-center justify-center'>
      <div className='card w-96 bg-white shadow-xl'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>🎉 DaisyUI is Working</h2>
          <p>Tailwind v3 + DaisyUI is fully active.</p>
          <button className='btn btn-primary mt-4'>Test Button</button>
        </div>
      </div>
    </div>
  );
}
