import {surpriseMePrompts} from '../constants';
import FileSaver from 'file-saver';

/* This component is designed to write
 functions that we can reuse in our application*/
export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // Checking that the same "lottery" won't come out several times in a row.
    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`);
}
 