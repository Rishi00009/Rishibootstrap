const data = [
    {
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fcollections%2F9452494%2Fdemo-profile-images&psig=AOvVaw2Sz80telaifefYCRyZLdze&ust=1729390285506000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKD70ICvmYkDFQAAAAAdAAAAABAE',
      text1: 'Margaret E.',
      text2: '"This is fantastic! Thanks so much guys!"',
    },
    {
      image: 'https://example.com/image2.jpg',
      text1: 'Fred S.',
      text2: '"Bootstrap is amazing. I have been using it to create lots of super nice landing pages."',
    },
    {
      image: 'https://example.com/image3.jpg',
      text1: 'Sarah W.',
      text2: '"Thanks so much for making these free resources available to us!"',
    },
   
  ];

  const review = () => {
    return (
        <div className="reviewer">
          {data.map((item, index) => (
            <div className="personimg" key={index}>
              <img src={item.image} alt="Image" />
              <p className="person">{item.text1}</p>
              <p className="person">{item.text2}</p>
            </div>
          ))}
        </div>
      );
    };
  
  export default review;