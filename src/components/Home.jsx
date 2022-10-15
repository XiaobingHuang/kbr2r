import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container-fluid">
            
                
          <form class="form-inline">
            <div class="form-group">
              <label for="search">Search:</label>
                <input type="text" class="form-control" placeholder="Enter ID" id="search"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="dropdown-item">Action</li>
              <li class="dropdown-item">Another action</li>
    
            </ul>
          </div>

              
            
      </div>
    </div>
  );
}

export default Home;
