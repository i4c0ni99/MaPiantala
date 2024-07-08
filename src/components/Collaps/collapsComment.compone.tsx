import { useEffect, useState } from "react";
import { CommentIcon } from "../../assets/Icon/Iconi";
import { Terrain } from "../../types/terrain.class";
import { IButton } from "../button/Button.component";
import { Event } from "../../types/Event.class";
import { getCookie } from "../../services/MaPiantalaCookies.service";
import { getCommentsbyEvent } from "../../mocks/getEvents.mock";
import { Comment } from "../../types/Comment.class";

export interface ICollapsComment {


    terrain?: Terrain;
    event?: Event;
    Button?: React.ReactElement<IButton>;
}

export const CommentCollaps: React.FC<ICollapsComment> = function ({
    terrain,
    event,
    Button,

}: ICollapsComment) {

    const user = getCookie('user')
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (event) {
                    const commentsInEvent: Comment[] = await getCommentsbyEvent(event?.id);
                    setComments(commentsInEvent)
                    event.comments=comments
                    console.log(comments)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    if (terrain)
        return (

            <div className="collapse size-full bg-base-200">
                <input type="checkbox" />

                <div className="collapse-title text-xl font-medium h-3">


                    <div>{Button}</div>
                    <CommentIcon></CommentIcon>
                </div>
                <div className="collapse-content">
                    {
                        terrain?.comments?.map((comment) => (
                            <p>
                                {user == comment.user ? (
                                    <div className="chat chat-end">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS chat bubble component"
                                                    src={comment.user.profilePicture}
                                                />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            {comment.user.email}
                                            <time className="text-xs opacity-50">
                                                {comment.date.toLocaleDateString("en-US")}
                                            </time>
                                        </div>
                                        <div className="chat-bubble">{comment.content}</div>
                                    </div>
                                ) : (
                                    <div className="chat chat-start">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS chat bubble component"
                                                    src={comment.user.profilePicture}
                                                />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            {comment.user.email}
                                            <time className="text-xs opacity-50">
                                                {comment.date.toLocaleDateString("en-US")}
                                            </time>
                                        </div>
                                        <div className="chat-bubble">{comment.content}</div>
                                    </div>

                                )}
                            </p>
                        ))}
                    <div className="flex flex-row pt-2">
                        <textarea
                            className="textarea textarea-accent basis-3/4 h-3 mr-2"
                            placeholder="Bio"
                        ></textarea>
                        <button className=" btn btn-active btn-accent basis-1/4 mr-2">
                            Send
                        </button>
                    </div>

                </div>
            </div>

        );
    else if (event)
        return (

            <div className="collapse size-full bg-base-200">
                <input type="checkbox" />

                <div className="collapse-title text-xl font-medium h-3">


                    <div>{Button}</div>
                    <CommentIcon></CommentIcon>
                </div>
                <div className="collapse-content">
                    {
                        event?.comments?.map((comment) => (
                            <p>
                                {user.id == comment.user.id ? (
                                    <div className="chat chat-end">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS chat bubble component"
                                                    src={comment.user.profilePicture}
                                                />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            {comment.user.email}
                                            <time className="text-xs opacity-50">
                                                {comment.date.toLocaleDateString("en-US")}
                                            </time>
                                        </div>
                                        <div className="chat-bubble">{comment.content}</div>
                                    </div>
                                ) : (
                                    <div className="chat chat-start">
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS chat bubble component"
                                                    src={comment.user.profilePicture}
                                                />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                            {comment.user.email}
                                            <time className="text-xs opacity-50">
                                                {comment.date.toLocaleDateString("en-US")}
                                            </time>
                                        </div>
                                        <div className="chat-bubble">{comment.content}</div>
                                    </div>

                                )}
                            </p>
                        ))}
                    <div className="flex flex-row pt-2">
                        <textarea
                            className="textarea textarea-accent basis-3/4 h-3 mr-2"
                            placeholder="Bio"
                        ></textarea>
                        <button className=" btn btn-active btn-accent basis-1/4 mr-2">
                            Send
                        </button>
                    </div>

                </div>
            </div>

        );


};
