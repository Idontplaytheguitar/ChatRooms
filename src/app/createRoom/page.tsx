import { CreateForm } from "fndtn/components/FormReusable";
import { CreateRoomForm } from "./components/FormCreate";
import { onSubmit } from "../formUtils/roomCreate";
import { formRoom } from "cms/Forms";

export default function CreateRoom() {
    
    return (
        <div>
            <CreateForm 
            formSchemaOptions={roomCreateSchema}
            defaultValues={{
                name: '',
                chatPrivate: false,
                listed: true,
                duration: '1 day'
            }}
            onSubmit={onSubmit}
            items={formRoom}
            />
        </div>
    );
}

