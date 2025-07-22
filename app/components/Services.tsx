

const Services = () => {
    return (
        <div className="min-h-[120vh] py-[50px] w-screen flex items-center justify-center">
            <div className="w-[80%] mt-[40px] flex   flex-col">
                <div className="leading-[50px] sm:leading-[64px] blogs1 text-center">
                    <p className="text-[44px] sm:text-[55px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">Services</p>
                    <p className="text-[40px] sm:text-[55px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">that We Provide</p>
                </div>
                <div className="flex items-center  blogs4 mt-[40px] justify-center">
                      <div className="grid w-[95%] sm:w-[95%] md:w-[85%] grid-cols-2 md:grid-cols-4 gap-[20px] sm:gap-[20px] md:gap-[0px] ">
                          
                            {/* <BlogCard text="Blog 1" text1="Blog Title Blog Title" onClick={onBlog1Click}/>
                            <BlogCard text="Blog 1" text1="Blog Title Blog Title" onClick={onBlog1Click}/>
                          
                            <BlogCard text="Blog 1" text1=" Blog Title Blog Title" onClick={onBlog1Click}/>
                            <BlogCard text="Blog 1" text1="Blog Title Blog Title" onClick={onBlog1Click}/> */}

                      </div>
                    </div>
                <div className="flex blogs4 items-center justify-center mt-[40px]">
                    {/* <PrimaryBtn text="More Blogs" onClick={onAllBlogsClick} /> */}
                </div>
            </div>
        </div>
    );
}

export default Services;