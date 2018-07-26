const fs = require('fs');
const path = require('path');
const globalPath = path.join(__dirname, "../../");

const rmdir = function (dir) {
    var list = fs.readdirSync(dir);
    for (var i = 0; i < list.length; i++) {
        var filename = path.join(dir, list[i]);
        var stat = fs.statSync(filename);

        if (filename == "." || filename == "..") {
            // pass these files
        } else if (stat.isDirectory()) {
            // rmdir recursively
            rmdir(filename);
        } else {
            // rm fiilename
            fs.unlinkSync(filename);
        }
    }
    fs.rmdirSync(dir);
};

module.exports = function createApp (name, projectPath, location, basemap, color) {
    
    let _name = "__" + projectPath.toLowerCase().replace(/ /g, '');
    console.log('Creating app: ' + _name);

    // Function that creates the folder structure and the app
    const createAppStructure = function () {
        
        

        fs.mkdir(_name, function () {
            console.log('Folder created');
        });

        // Create App
        fs.readFile(globalPath + "/src/app/app.html", function (err, data) {
            let dataToCopy = data.toString().replace(/__title__/g, _name).replace(/__name__/g, name).replace(/__basemap__/g, basemap).replace(/__location__/g, location);
            color == 'black' ?
                dataToCopy = dataToCopy.replace(/__backgroundcolor__/g, '#000').replace(/__textcolor__/g, '#FFF')
                :
                dataToCopy = dataToCopy.replace(/__backgroundcolor__/g, '#FFF').replace(/__textcolor__/g, '#000')

            fs.appendFile(globalPath + "/" + _name + "/" + _name + ".html", dataToCopy, function (err) {
                if (err) throw err;
                console.log('App created!');
            });
        });
    };

    // Conditional check, if app folder exists, delete it and after create it again with the new data
    if(fs.existsSync(_name)) {
        console.log('Folder already exists! Deleting...');
        
        const asyncCreateApp = function () {
            return new Promise((resolve, reject) => {
                if(_name){
                    rmdir(_name);
                    resolve();
                } else {
                    reject();
                }
            });
        };

        asyncCreateApp().then(() => {
            createAppStructure();
        });
        
    } else {
        createAppStructure();
    };
};
