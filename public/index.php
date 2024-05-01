
    <div id="popUpId" class="popUp">
        <h3>Add New Task</h3>
        <div id="successId" class="succes message alert-success">
            <p class="p">Your todo have been added succesfully</p>
        </div>
        <form action="" method="post" id="form">
            <div class="popUpElements">
                <label for="title">Title</label>
                <input class="inputIndex" type="text" class="title" id="titleId" placeholder="Enter a title">
            </div>

            <div class="popUpElements">
                <label for="folder">Folder Name</label>
                <input class="inputIndex" type="text" class="folder" id="folderId" placeholder="Enter a Folder Name">
            </div>
            <div class="popUpElements">
                <label for="description">description</label>
                <textarea class="message" id="message" name="message" id="" cols="15" rows="2" placeholder="enter a description"></textarea>
            </div>

            <div class="popUpElements">
                <label class="label" for="title">Subtaks</label>
                <input class="inputIndex" id="substack" type="text" placeholder="Enter a Substack">
                <button class="btn-popUp-Element" type="button">Add New Substack</button>
            </div >

            <div class="popUpElements">
                <label for="Status">Status</label>
                <select id="Status" name="Status">
                  <option value="TODO">TODO</option>
                  <option value="DOING">DOING</option>
                  <option value="DONE">DONE</option>
                </select> 
            </div>
             <button name="submitTodo" type="submit" class="formButton">Add Todo</button>
        </form>
    </div>


    <section class="section">
        <div class="elementsInfo">
           <div class="leftElements">
                <h3 class="h3"></h3>
           </div>
                <button type="button" class="addTodo" id="addTodoId">Add Todo</button>
        </div>

        <div class="containerTodo">
            
        </div>
        
        <div class="popTodoInfos">
            <div class="infoTop">
                <div class="divH3">
                    <h3 class="h3PopUp">All my todos</h3></div>
                <div>
                    <span>&#9776;</span>
                </div>
            </div>

            <div class="spanContainer">
                <p class="description">description</p>
            </div>
            <div class="SubstackContainer">
               
            </div>
            <div class="statusInfo">
                <label for="Status">Status</label>
                <select id="Status" name="Status">
                  <option value="TODO">TODO</option>
                  <option value="DOING">DOING</option>
                  <option value="DONE">DONE</option>
                </select> 
            </div>
        </div>
    </section>
    <?php require '../App/includes/footer.php'; ?>

