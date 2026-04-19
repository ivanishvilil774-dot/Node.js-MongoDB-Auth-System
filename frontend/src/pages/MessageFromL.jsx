function MessageFromL() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
            
            <h1 className="text-2xl font-bold mb-4">
            Today is a big day 🚀
            </h1>

            <p className="text-gray-700 mb-4">
            My name is Luka, I’m a young developer from Georgia.  
            I’m 16 years old and I’m currently learning full-stack development.
            </p>

            <p className="text-gray-700 mb-4">
            Today I built my first project using <b>MongoDB</b>, <b>Express</b>, <b>React</b>, and <b>Node.js</b>.  
            I’m really happy with the progress I’ve made and excited to keep improving.
            </p>

            <p className="text-gray-700 mb-6">
            I hope this project will grow into something big in the future and become part of my journey as a developer.
            </p>

            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="inline-block bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition" target="_blank" rel="noopener noreferrer">
                More About Me
            </a>

        </div>
        </div>
    );
}

export default MessageFromL;