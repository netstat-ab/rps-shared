export type Choice = 'rock' | 'paper' | 'scissors'

export interface MakeTurnRequestDto {
  choice: Choice
}

export interface RoundDto {
  turns: Array<[number, Choice]>
}

export interface GameBriefResponseDto {
  id: number
  players: number[]
}

export interface GameResponseDto extends GameBriefResponseDto {
  rounds: RoundDto[]
}
