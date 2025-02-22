
const Carousel = () => {
  

  

  return (
    <div className="flex mt-40 space-x-4 flex-col sm:flex-row">
      <div className="w-full sm:w-3/5">
        <img
          src="https://cdn.cody.mn/img/325476/2600x0xwebp/banner_71banner-1.jpg?h=09e579afc56e5e46bd5ca690e6dba4642e271098"
          alt="Banner 1"
          className="w-full h-[600px] object-cover rounded-md"
        />
      </div>
      <div className="w-full sm:w-2/5 flex flex-col space-y-4">
        <div>
          <img
            src="https://cdn.cody.mn/img/326126/2600x0xwebp/banner_85.jpg?h=09e579afc56e5e46bd5ca690e6dba4642e271098"
            alt="Banner 2"
            className="w-full h-[290px] sm:h-[295px] object-cover rounded-md"
          />
        </div>
        <div>
          <img
            src="https://cdn.cody.mn/img/325592/2600x0xwebp/banner_77.jpg?h=09e579afc56e5e46bd5ca690e6dba4642e271098"
            alt="Banner 3"
            className="w-full h-[290px] sm:h-[295px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
  
  
};

export default Carousel;
