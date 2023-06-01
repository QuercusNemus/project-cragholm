import {Form} from "../src/models/index.js";
import {DataStore} from 'node_modules/@aws-amplify/datastore';

try {
    const post = await DataStore.save(
        new Form({
            "full_name": "Eurig Oakshield",
            "email": "eurig@oak.lett",
            "heard_from": "Facebook"
        })
    )
    console.log('Post saved successfully!', post);
} catch (error) {
    console.log('Error saving post', error);
}
