import { useState } from "react";
import { CommentIcon } from "../../assets/Icon/Iconi";
import { Event } from "../../types/Event.class";
import { Terrain } from "../../types/terrain.class";
import { User } from "../../types/User.class";
import { IButton } from "../button/Button.component";

export interface ICollapsComment {


  terrain: Terrain;
  event?: Event;
  Button?: React.ReactElement<IButton>;

}

export const CommentCollaps: React.FC<ICollapsComment> = function ({
  terrain,
  Button,
}: ICollapsComment) {

    const [user] = useState(
        new User(
            0,
            "i4c0ni99@gmail.com",
            "",
            "Gigi",
            "Iaconi",
            "i4c0ni99",
            "",
            "",
            false,
            ""
        )
    );

    return (
        <div className="collapse size-full bg-base-200">

            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium h-3">


                <div>{Button}</div>
                <CommentIcon></CommentIcon>
            </div>
            <div className="collapse-content">
                {terrain &&
                    terrain.comments.map((comment) => (
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
                                        {comment.user.username}
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
                                        {comment.user.username}
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
