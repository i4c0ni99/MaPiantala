import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CommentIcon } from "../../assets/Icon/Iconi";
import { Terrain } from "../../types/terrain.class";
import { IButton } from "../button/Button.component";
import { Event } from "../../types/Event.class";
import { getCookie } from "../../services/MaPiantalaCookies.service";
import { getCommentsbyEvent } from "../../mocks/getEvents.mock";
import { Comment } from "../../types/Comment.class";
import { axiosInstance } from "../../utils/axiosInstance";
import { User } from "../../types/User.class";
import { getCommentsbyTerrain } from "../../mocks/getTerrains.mock";

export interface ICollapsComment {


    terrain?: Terrain;
    event?: Event;
    
}

export const CommentCollaps: React.FC<ICollapsComment> = function ({
    terrain,
    event,
    

}: ICollapsComment) {

    const user: User = getCookie('user')
    const [comments, setComments] = useState<Comment[]>([]);
    const [comment, setComment] = useState<Comment>(new Comment(new Date(), getCookie('user'), ""))

    useEffect(() => {

        const fetchData = async () => {
            try {
                if (terrain) {
                    const commentsInTerrain: Comment[] = await getCommentsbyTerrain(terrain.id.toString());
                    setComments(commentsInTerrain)
                    
                }
                if (event) {
                    const commentsInEvent: Comment[] = await getCommentsbyEvent(event.id.toString());
                    setComments(commentsInEvent)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [comments]);

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        console.log(value)
        setComment(prev => ({
            ...prev,
            [name]: value
        })
        );

    };
    // Handle form submission
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        /*  const  newComment = new Comment(comment.createdAt,comment.user,comment.text)
         setComment(newComment) */
        if (terrain)
            await axiosInstance.post('/comment', {
                text: comment.text,
                terrainId: terrain.id,
                userId: user.id
            })
        if (event)
            await axiosInstance.post('/comment', {
                text: comment.text,
                eventId: event.id,
                userId: user.id
            })
        
    }
    if (terrain)
        return (

            <div className="collapse size-full bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium h-3">
                    <CommentIcon></CommentIcon>
                </div>
                <div className="collapse-content">
                    {comments?.map((comment) => (
                        <p>
                            {user.id == comment.user.id ? (
                                <div className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src={user.profilePicture ? user.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"}
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        {comment.user.email}
                                        <time className="text-xs opacity-50">
                                            {comment.createdAt.toString()}
                                        </time>
                                    </div>
                                    <div className="chat-bubble">{comment.text}</div>
                                </div>
                            ) : (
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src={user.profilePicture ? user.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"}
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        {comment.user.email}
                                        <time className="text-xs opacity-50">
                                            {comment.createdAt.toString()}
                                        </time>
                                    </div>
                                    <div className="chat-bubble">{comment.text}</div>
                                </div>

                            )}
                        </p>
                    ))}
                    <form className="flex flex-row pt-2" onSubmit={handleSubmit} >
                        <input
                            type="text"
                            name="text"
                            defaultValue={comment.text}
                            onChange={handleChange}
                            className="textarea textarea-accent basis-3/4 h-3 mr-2"
                            placeholder="Bio"
                        ></input>
                        <button type="submit" className="btn btn-active btn-accent basis-1/4 mr-2">
                            Send
                        </button>
                    </form>
                </div>
            </div>

        );
    if (event)
        return (

            <div className="collapse size-full bg-base-200">
                <input type="checkbox" />

                <div className="collapse-title text-xl font-medium h-3">
                    <CommentIcon></CommentIcon>
                </div>
                <div className="collapse-content">
                    {
                        comments?.map((comment) => (
                            <p>
                                {user.id == comment.user.id ? (
                                    <div className="chat chat-end">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS chat bubble component"
                                                    src={user.profilePicture ? user.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"}
                                                />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            {comment.user?.email}
                                            <time className="text-xs opacity-50">
                                                {comment.createdAt.toString()}
                                            </time>
                                        </div>
                                        <div className="chat-bubble">{comment.text}</div>
                                    </div>
                                ) : (
                                    <div className="chat chat-start">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS chat bubble component"
                                                    src={user.profilePicture ? user.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"}
                                                />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            {comment.user?.email}
                                            <time className="text-xs opacity-50">
                                                {comment.createdAt.toString()}
                                            </time>
                                        </div>
                                        <div className="chat-bubble">{comment.text}</div>
                                    </div>

                                )}
                            </p>
                        ))}
                    <form className="flex flex-row pt-2" onSubmit={handleSubmit} >
                        <input
                            type="text"
                            name="text"
                            defaultValue={comment.text}
                            onChange={handleChange}
                            className="textarea textarea-accent basis-3/4 h-3 mr-2"
                            placeholder="Bio"
                        ></input>
                        <button type="submit" className="btn btn-active btn-accent basis-1/4 mr-2">
                            Send
                        </button>
                    </form>

                </div>
            </div>

        );


};
