import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Terrain } from "src/types/Terrain.class";
import { Event } from "src/types/Event.class";
import { getCookie } from "src/services/cookies.service";
import { getCommentsbyEvent } from "src/services/events.service";
import { Comment } from "src/types/Comment.class";
import { axiosInstance } from "src/utils/axiosInstance";
import { User } from "src/types/User.class";
import { getCommentsbyTerrain } from "src/services/terrains.service";

export interface ICollapsComment {
    terrain?: Terrain;
    event?: Event;
}

export const CommentCollaps: React.FC<ICollapsComment> = function ({
    terrain,
    event,
}: ICollapsComment) {
    const user: User = getCookie("user");
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentCreate, setCommentCreate] = useState(" ");
    const [comment, setComment] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (terrain) {
                    const commentsInTerrain: Comment[] =
                        await getCommentsbyTerrain(terrain.id.toString());
                    setComments(commentsInTerrain);
                }
                if (event) {
                    const commentsInEvent: Comment[] = await getCommentsbyEvent(
                        event.id.toString()
                    );
                    setComments(commentsInEvent);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [commentCreate, event, terrain]);

    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setComment(e.target.value);
    }
    // Handle form submission
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (terrain)
            await axiosInstance.post("/comment", {
                text: comment,
                terrainId: terrain.id,
                userId: user.id,
            });
        if (event)
            await axiosInstance.post("/comment", {
                text: comment,
                eventId: event.id,
                userId: user.id,
            });

        setCommentCreate(comment);
        setComment("");
    }
    if (terrain)
        return (
            <>
                <div role="tablist" className="tabs tabs-lifted">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Dettagli"
                        defaultChecked
                    />
                    <div
                        role="tabpanel"
                        className="tab-content bg-base-200 border-base-200 rounded-box p-6"
                    >
                        <h1 className="text-xl font-medium">
                            {terrain.description}
                        </h1>
                        <h4 className="text-xl font-medium">
                            Il terreno si trova in {terrain.address}
                        </h4>
                    </div>
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="commenti"
                    />

                    <div
                        role="tabpanel"
                        className="tab-content bg-base-200 border-base-200 rounded-box p-6"
                    >
                        <div className="h-52 overflow-y-auto scrollbar-hide">
                            {comments?.map((comment) => (
                                <p>
                                    {user.id == comment.user.id ? (
                                        <div className="chat chat-end">
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt="Tailwind CSS chat bubble component"
                                                        src={
                                                            user.profilePicture
                                                                ? user.profilePicture
                                                                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                {comment.user.email}
                                                <time className="text-xs opacity-50">
                                                    {new Date(
                                                        comment.createdAt
                                                    ).toLocaleDateString()}
                                                </time>
                                            </div>
                                            <div className="chat-bubble lg:w-96  sm:w-10 break-words">
                                                {comment.text}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="chat chat-start">
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt="Tailwind CSS chat bubble component"
                                                        src={
                                                            comment.user
                                                                .profilePicture
                                                                ? comment.user
                                                                      .profilePicture
                                                                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                {comment.user.email}
                                                <time className="text-xs opacity-50">
                                                    {new Date(
                                                        comment.createdAt
                                                    ).toLocaleDateString()}
                                                </time>
                                            </div>
                                            <div className="chat-bubble lg:w-96  sm:w-10 break-words">
                                                {comment.text}
                                            </div>
                                        </div>
                                    )}
                                </p>
                            ))}
                        </div>
                        <form
                            className="flex flex-row pt-2"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="text"
                                value={comment}
                                onChange={handleChange}
                                className="textarea textarea-accent basis-3/4 h-3 mr-2"
                                placeholder="Bio"
                            ></input>
                            <button
                                type="submit"
                                className="btn btn-active btn-accent basis-1/4 mr-2"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    if (event) {
        const date = new Date(event.scheduledDate);
        return (
            <>
                <div role="tablist" className="tabs tabs-lifted">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Dettagli"
                        defaultChecked
                    />
                    <div
                        role="tabpanel"
                        className="tab-content bg-base-200 border-base-200 rounded-box p-6"
                    >
                        <h1 className="lg:text-xl sm:text-sm font-medium">
                            {event.description}
                        </h1>
                        <h4 className="lg:text-xl sm:text-sm font-medium">
                            l'evento si terra il giorno {date.getDay()}/
                            {date.getMonth()}/{date.getFullYear()} in{" "}
                            {event.address}
                        </h4>
                    </div>
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="commenti"
                    />

                    <div
                        role="tabpanel"
                        className="tab-content bg-base-200 border-base-200 rounded-box p-6"
                    >
                        <div className="h-52 overflow-y-auto scrollbar-hide">
                            {comments?.map((comment) => (
                                <p>
                                    {user.id == comment.user.id ? (
                                        <div className="chat chat-end">
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt="Tailwind CSS chat bubble component"
                                                        src={
                                                            user.profilePicture
                                                                ? user.profilePicture
                                                                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                {comment.user.email}
                                                <time className="text-xs opacity-50">
                                                    {new Date(
                                                        comment.createdAt
                                                    ).toLocaleDateString()}
                                                </time>
                                            </div>
                                            <div className="chat-bubble lg:w-96  sm:w-10 break-words">
                                                {comment.text}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="chat chat-start">
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt="Tailwind CSS chat bubble component"
                                                        src={
                                                            comment.user
                                                                .profilePicture
                                                                ? comment.user
                                                                      .profilePicture
                                                                : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                {comment.user.email}
                                                <time className="text-xs opacity-50">
                                                    {new Date(
                                                        comment.createdAt
                                                    ).toLocaleDateString()}
                                                </time>
                                            </div>
                                            <div className="chat-bubble lg:w-96  sm:w-10 break-words">
                                                {comment.text}
                                            </div>
                                        </div>
                                    )}
                                </p>
                            ))}
                        </div>
                        <form
                            className="flex flex-row pt-2"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="text"
                                value={comment}
                                onChange={handleChange}
                                className="textarea textarea-accent basis-3/4 h-3 mr-2"
                                placeholder="Bio"
                            ></input>
                            <button
                                type="submit"
                                className="btn btn-active btn-accent basis-1/4 mr-2"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
};
