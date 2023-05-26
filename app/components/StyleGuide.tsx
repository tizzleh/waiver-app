import React from 'react';

const StyleGuide: React.FC = () => {
  return (
    <div className="antialiased font-sans text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl text-gray-200 font-bold mb-8">Style Guide</h1>
        <h1 className="text-4xl font-bold mb-8"> 
            <span>{process.env.COMPANY_NAME}</span>
</h1>
        <div className="mb-8">
          <h2 className="text-2xl text-white-300 font-bold mb-4">Typography</h2>
          <h2 className="text-2xl font-sans md:font-serif mb-4">Typography</h2>
          <p className="text-lg mb-2">Heading 1</p>
          <h1 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
          <p className="text-lg mb-2">Heading 2</p>
          <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
          <p className="text-lg-white mb-2">Paragraph</p>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-lg mb-2">Link</p>
          <a href="/" className="text-blue-500 hover:underline">Click me</a>
        </div>

<select className="form-select px-4 py-3 rounded-full">
</select>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Primary Button
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">
            Secondary Button
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">
            Delete Button
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Forms</h2>
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input className="border border-gray-400 rounded py-2 px-4 mb-4" type="text" id="name" />
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input className="border border-gray-400 rounded py-2 px-4 mb-4" type="email" id="email" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Alerts</h2>
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded mb-4">
            This is a blue alert message.
          </div>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
            This is a green alert message.
          </div>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            This is a red alert message.
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleGuide;

