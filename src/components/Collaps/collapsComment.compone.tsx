import { useState } from "react";
import { CommentIcon } from "../../assets/Icon/Iconi";
import { Event } from "../../types/Event.class";
import { Terrain } from "../../types/terrain.class";
import { User } from "../../types/User.class";
import { IButton } from "../button/Button.component";

export interface ICollapsComment {
    obj : Object,
    Button?: React.ReactElement<IButton>
}

export const CommentCollaps: React.FC<ICollapsComment> = function ({ obj, Button }: ICollapsComment) {
    if (obj instanceof Terrain) {
        const terrain = obj as Terrain
    return (
        <div className="collapse size-full bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title h-32 text-xl font-medium">
                <h2 >{terrain.title}</h2>
                <p>{terrain.description}</p>
                <div className="w-32">
                    {Button}
                </div>
                <CommentIcon></CommentIcon>
            </div>
            <div className="collapse-content">
 
                {terrain?.comments?.map((comment) =>
                    <p>
                        {terrain.user == comment.user ?
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src={comment.user.profilePicture} />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {comment.user.username}
                                    <time className="text-xs opacity-50">{comment.date.toLocaleDateString("en-US")}</time>
                                </div>
                                <div className="chat-bubble">{comment.content}</div>
                            </div> :
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src={comment.user.profilePicture} />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {comment.user.username}
                                    <time className="text-xs opacity-50">{comment.date.toLocaleDateString("en-US")}</time>
                                </div>
                                <div className="chat-bubble">{comment.content}</div>
                            </div>
                        }
                    </p>
                )}
                <textarea className="textarea textarea-accent h-4 w-4/5 ml-8 mt-4" placeholder="Bio"></textarea>
                <button className=" ml-2 mr-2 bottom-8 btn btn-active btn-accent">Send</button>
            </div>

        </div>
    )
}else{
    const event = obj as Event
    return(
        <div className="collapse size-full bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title h-32 text-xl font-medium">
                <h2 >{event.title}</h2>
                <p>{event.description}</p>
                <div className="w-32">
                    {Button}
                </div>
                <CommentIcon></CommentIcon>
            </div>
            <div className="collapse-content">
 
                {event?.comments?.map((comment) =>
                    <p>
                        {event.user == comment.user ?
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src={comment.user.profilePicture} />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {comment.user.username}
                                    <time className="text-xs opacity-50">{comment.date.toLocaleDateString("en-US")}</time>
                                </div>
                                <div className="chat-bubble">{comment.content}</div>
                            </div> :
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src={comment.user.profilePicture} />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {comment.user.username}
                                    <time className="text-xs opacity-50">{comment.date.toLocaleDateString("en-US")}</time>
                                </div>
                                <div className="chat-bubble">{comment.content}</div>
                            </div>
                        }
                    </p>
                )}
                <textarea className="textarea textarea-accent h-4 w-4/5 ml-8 mt-4" placeholder="Bio"></textarea>
                <button className=" ml-2 mr-2 bottom-8 btn btn-active btn-accent">Send</button>
            </div>

        </div>
    )
}

} 