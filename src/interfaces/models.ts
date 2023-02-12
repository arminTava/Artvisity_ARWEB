import { MutableRefObject } from 'react';


export interface Model3D {
    id?: number,
    modelName: string,
    modelYear?: string,
    modelSujet?: string,
    modelUrl: string,
    modelPoster?: string
    modelBackground: string,
    skyboxImage?: string,
    ref?: MutableRefObject<HTMLElement>,
    arMode: number, // 0 surface, 1 marker, 2 both
    markerUrl?: string, 
    rotation?: number[], 
    scale?: number[]
  }

export interface Room {
  name: string, 
  website?: string,
  models: Model3D [],
  loading?:boolean
}