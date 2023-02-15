export interface Player {
  id: number
  name: string
}

export interface GetPlayerResponseDto {
  player: Player | null
}

export interface CreatePlayerResponseDto {
  player: Player
}

export interface CreatePlayerRequestDto {
  name: string
}
