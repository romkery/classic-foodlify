import React from 'react';

const Home = () => {
  const mockTasteData = [
    { title: 'Sweetness', value: 100 },
    { title: 'Sourness', value: 0 },
    { title: 'Fattiness', value: 32 },
    { title: 'Spiceness', value: 0 },
  ];

  const getTasteLayout = () => {
    return (
      <>
        {mockTasteData.map((type: any) => {
          const rate =
            Math.ceil(type.value / 16.6) > 6 ? 6 : Math.ceil(type.value / 16.6);

          const getRateMarkUp = () => {
            const result = [];

            for (let i = 0; i < 6; i++) {
              if (i < rate) result.push(1);
              else result.push(0);
            }

            return result;
          };

          return (
            <div className="rate" key={type.title}>
              <p>{type.title}</p>
              <div className="rate__thumbs">
                {getRateMarkUp().map((num: number, index: number) => {
                  return num ? (
                    <span className="rate__thumbs-active" key={index} />
                  ) : (
                    <span className="rate__thumbs-inactive" key={index} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="home-container">
      <div className="home">
        <div className="hero">
          <img src="/logo.svg" alt="logo" />
          <h1>
            foodlify <br />
            Cook <span>delicious</span> food
          </h1>
          <p>even when there is no time</p>
        </div>
        <div className="announcement-grid-layout-container">
          <div className="announcement-grid-layout">
            <div className="announcement-grid-layout__taste">
              <div className="container">
                <img
                  src="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg"
                  alt="taste img"
                />
                <div className="rate-container">{getTasteLayout()}</div>
              </div>
            </div>
            <div className="announcement-grid-layout__receipt">receipt</div>
            <div className="announcement-grid-layout__wine">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              aspernatur atque cum eligendi eos eum, fugit magni modi neque
              numquam quas quasi quis quisquam, ratione reiciendis rem soluta
              tenetur. Expedita.
            </div>
            <div className="announcement-grid-layout__fact">fact</div>
            <div className="announcement-grid-layout__advice">advice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
