const data = [
    {
      images: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text1: 'Kevin',
      text2: '"This is fantastic! Thanks so much guys!"',
    },
    {
      images: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text1: 'Fred S.',
      text2: '"Bootstrap is amazing. I have been using it to create lots of super nice landing pages."',
    },
    {
      images: 'https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text1: 'Brain',
      text2: '"Thanks so much for making these free resources available to us!"',
    },
   
  ];

  const review = () => {
    return (
        <div className="reviewer">
          {data.map((item, index) => (
            <div className="reviewers" key={index}>
              <img className="personimg" src={item.images} alt="" />
              <p className="person">{item.text1}</p>
              <p className="person">{item.text2}</p>
            </div>
          ))}
        </div>
      );
    };
  
  export default review;