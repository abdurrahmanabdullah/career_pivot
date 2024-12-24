import MenuItem from "@mui/material/MenuItem";
import  { useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header"; 
import "./blog.css";

export const Blogs = () => { const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <main className="blogs">
     <Header />

      <section className="content">
     
       
          <div className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          
        </div>

       

        <div className="blog-section">
          <article className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          </article>
          <article className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          </article>
          <article className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          </article>
        </div>


        
      </section>
        {/* Footer */}
     <Footer/>
    </main>
  );
};
export default Blogs;