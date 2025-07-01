
import { Comment } from "../types/Comment.class";
import { Terrain } from "../types/Terrain.class";

import { axiosInstance } from "../utils/axiosInstance";
import location from "../utils/location";

export async function getTerrainsByDistance(): Promise<Terrain[]> {
    const result = await axiosInstance.get(`terrain/lat/${location.lat}/lon/${location.lng}/distance/10000`)

    if (!result.data) return [];
    return result.data.map((terrain: Terrain) => {
        return new Terrain(
            terrain.id,
            terrain.title,
            terrain.description,
            terrain.imageUrl,
            terrain.address,
            terrain.slot,
            terrain.terrainSize,
            terrain.isPublic,
            terrain.user,
            terrain.comments,
            terrain.latitude,
            terrain.longitude,
            terrain.createdAt,
            terrain.updatedAt,
        )
    });
}

export async function getTerrainById(id?: string): Promise<Terrain | null> {
    const result = await axiosInstance.get(`terrain/${id}`);
    if (!result.data) return null;

    return new Terrain(
        result.data.id,
        result.data.title,
        result.data.description,
        result.data.imageUrl,
        result.data.address,
        result.data.slot,
        result.data.terrainSize,
        result.data.isPublic,
        result.data.user,
        result.data.comments,
        result.data.latitude,
        result.data.longitude,
        result.data.createdAt,
        result.data.updatedAt,
    );
}

export async function updateTerrain(terrain: Terrain) {
    return await axiosInstance.patch(`/terrain/${terrain.id}`, {
        "title": terrain.title,
        "description": terrain.description,
        "latitude": terrain.latitude,
        "longitude": terrain.longitude,
        "address": terrain.address,
        "imageUrl": terrain.imageUrl,
        "isPublic": terrain.isPublic,
        "userId": terrain.user.id
    });
}
export async function getTerrainsByUser(id: number) {
    const result = await axiosInstance.get(`terrain/user/${id}`);
    if (!result.data) return [];

    return result.data.map((terrain: Terrain) => {
        return new Terrain(
            terrain.id,
            terrain.title,
            terrain.description,
            terrain.imageUrl,
            terrain.address,
            terrain.slot,
            terrain.terrainSize,
            terrain.isPublic,
            terrain.user,
            terrain.comments,
            terrain.latitude,
            terrain.longitude,
            terrain.createdAt,
            terrain.updatedAt,
        )
    });
}

export async function postTerrain(terrain: Terrain) {
    return await axiosInstance.post('/terrain', {
        "title": terrain.title,
        "description": terrain.description,
        "latitude": terrain.latitude,
        "longitude": terrain.longitude,
        "address": terrain.address,
        "imageUrl": terrain.imageUrl,
        "userId": terrain.user.id
    });
}

export async function getCommentsbyTerrain(id: string) {
    const result = await axiosInstance.get(`/comment/terrain/${id}`);

    if (!result.data) return [];

    return result.data.map(
        (comment: Comment) => {
            return new Comment(
                comment.id,
                comment.createdAt,
                comment.user,
                comment.text,
            )
        }
    );
}


