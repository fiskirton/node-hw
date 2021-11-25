import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Get(':id/games')
  getUserGames(@Param('id') id: string) {
    return this.usersService.getUserGames(id);
  }

  @Post()
  createUser(@Body() userData: User) {
    return this.usersService.createUser(userData);
  }

  @Post(':id/games')
  createUserGame(@Param('id') id: string, @Body() gameData: { id: string }) {
    return this.usersService.createUserGame(id, gameData.id);
  }

  @Post(':userid/games/:gameid')
  setUserGameTime(
    @Param('userid') userId: string,
    @Param('gameid') gameId: string,
    @Body() gameTime: { gameTime: number },
  ) {
    return this.usersService.setUserGameTime(userId, gameId, gameTime.gameTime);
  }
}
