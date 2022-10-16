// ┌─────────────────────────────────────┐
// │                                     │
// │        Overwrite settings           │
// │                                     │
// └─────────────────────────────────────┘

import { save_saved_search } from '../saved_searches/save_saved_search.js'

export function listener_searches_overwrite()
{

    console.log('click')
    const overwriteSearchesButton = document.getElementById('overwrite-saved-search');

    overwriteSearchesButton.addEventListener('click', function(event) {

        const modalSavedSearchTitle = document.getElementById('popup-modal-overwrite-message').dataset.savedSearchTitle;
        save_saved_search(modalSavedSearchTitle)

        // reload page.
        location.reload();

    })
    
}