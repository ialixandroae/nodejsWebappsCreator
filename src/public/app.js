$(document).ready(() => {
    
    const btnCreateApp = document.getElementById('btnCreateApp');
    const inputProjectTitle = document.getElementById('projectTitle');
    const inputProjectLocation = document.getElementById('projectLocation');
    const projectBasemap = document.getElementById('projectBasemap');
    const projectAppColor = document.getElementById('projectAppColor');

    $('#projectTitle').keyup((evt) => {
        if (inputProjectTitle.value.length > 0 && inputProjectLocation.value.length > 0 ) {
            document.getElementById('btnCreateApp').removeAttribute('disabled');
        } else {
            document.getElementById('btnCreateApp').setAttribute('disabled', true);
        }
    });

    $('#projectLocation').keyup((evt) => {
        if (inputProjectTitle.value.length > 0 && inputProjectLocation.value.length > 0) {
            document.getElementById('btnCreateApp').removeAttribute('disabled');
        } else {
            document.getElementById('btnCreateApp').setAttribute('disabled', true);
        }
    });
    
    btnCreateApp.addEventListener('click', () => {

        let projectName = inputProjectTitle.value;
        let projectPath = inputProjectLocation.value.replace(/ /g,'');
        let projectLocation = inputProjectLocation.value;
        let projectBasemapValue = projectBasemap.options[projectBasemap.selectedIndex].text.toLowerCase();
        let projectAppColorValue = projectAppColor.options[projectAppColor.selectedIndex].text.toLowerCase();
        let url = '/app/' + projectPath;
        
        let data = {
            name: projectName,
            path: projectPath, 
            location: projectLocation, 
            basemap: projectBasemapValue, 
            color: projectAppColorValue
        };

        $.ajax(url, {
            data: JSON.stringify(data),
            contentType: 'application/json',
            type: 'POST',
            success: function(response) {
                window.open(url + '?view=' + projectPath, "_blank");
            }
        });
    });
});
