import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';
import { UserGame } from './entities/userGames.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserGame)
    private userGameRepository: Repository<UserGame>,
  ) {}

  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async removeUser(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  async updateUser(id: string, user: User): Promise<UpdateResult> {
    return this.userRepository.update(id, user);
  }

  async getUserGames(id: string): Promise<User[]> {
    console.log(id);
    return this.userRepository.find({
      relations: ['userGames', 'userGames.game'],
      where: { id: id },
    });
  }

  async createUserGame(userId: string, gameId: string) {
    return this.userGameRepository.save({ userId, gameId });
  }

  async setUserGameTime(userId: string, gameId: string, gameTime: number) {
    const userGame = await this.userGameRepository.findOne({ userId, gameId });
    userGame.gameTime += gameTime;
    return this.userGameRepository.save(userGame);
  }
}
