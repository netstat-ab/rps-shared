import { PlayerDto } from "./player"


export type Choice = 'rock' | 'paper' | 'scissors'

export interface MakeTurnRequestDto {
  choice: Choice
}

export interface RoundDto {
  turns: Array<[number, Choice]>
}

export interface GameBriefResponseDto {
  id: number
  players: PlayerDto[]
}

export interface GameResponseDto extends GameBriefResponseDto {
  rounds: RoundDto[]
}
