import React from 'react'

function Home() {
    function Main() {
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
          // simulate data loading
          setTimeout(() => {
            setIsLoading(false);
          }, 22000);
        }, []);
        return <div>{isLoading ? <Loading /> : <App />}</div>;
      }
}

export default Home