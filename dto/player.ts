export interface PlayerDto {
  id: number
  name: string
}

export interface GetPlayerResponseDto {
  player: PlayerDto | null
}

export interface CreatePlayerResponseDto {
  player: PlayerDto
}

export interface CreatePlayerRequestDto {
  name: string
}
