import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container-fluid ">        
          <form class="form-inline">
            <div class="form-group">
              
                <input type="text" class="form-control" placeholder="Enter ID" id="search"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>  

              
            
      </div>
    </div>
  );
}

export default Home;
