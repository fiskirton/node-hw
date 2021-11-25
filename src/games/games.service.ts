import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  async getAllGames(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  async getGameById(id: string): Promise<Game> {
    return this.gameRepository.findOne(id);
  }

  async createGame(game: Game): Promise<Game> {
    return this.gameRepository.save(game);
  }

  async removeGame(id: string): Promise<DeleteResult> {
    return this.gameRepository.delete(id);
  }

  async updateGame(id: string, game: Game): Promise<UpdateResult> {
    return this.gameRepository.update(id, game);
  }
}
