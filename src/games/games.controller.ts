import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Game } from './entities/game.entity';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getAllGames() {
    return this.gamesService.getAllGames();
  }

  @Get(':id')
  getGameById(@Param('id') id: string) {
    return this.gamesService.getGameById(id);
  }

  @Post()
  createGame(@Body() gameData: Game) {
    this.gamesService.createGame(gameData);
  }

  @Put(':id')
  updateGame(@Body() gameData: Game, @Param('id') id: string) {
    return this.gamesService.updateGame(id, gameData);
  }

  @Delete(':id')
  deleteGame(@Param('id') id: string) {
    return this.gamesService.removeGame(id);
  }
}
