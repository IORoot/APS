
// ┌─────────────────────────────────────┐
// │                                     │
// │   EXCLUDE button Event Listener     │
// │                                     │
// └─────────────────────────────────────┘

export function listener_exclude_button(){

    const excludeButton = document.getElementById('drawer-exclude');

    excludeButton.addEventListener('click', function(event) {

        // Get current ID & source
        const excludeID = document.getElementById('drawer-id').dataset.id;
        const excludeIDinteger = parseInt(excludeID);
        const excludeSource = document.getElementById('drawer-source').dataset.source;
        
        const excludeArray = [excludeIDinteger, excludeSource]

        var blacklist = [];

        // Get the blacklist from localStorage
        blacklist = JSON.parse(window.localStorage.getItem('blacklistedIDs'));

        if (blacklist){
            // push new ID onto array.
            addToBlacklist(blacklist,excludeArray)
            list_blacklist()
            removeFeatureFromMap(excludeIDinteger);
            drawer.hide();
        } else {
            blacklist = [excludeArray];
        }
        

        // Re-save array back to localStorage
        window.localStorage.setItem('blacklistedIDs', JSON.stringify(blacklist));

    });

}