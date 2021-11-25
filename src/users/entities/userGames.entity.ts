import { Game } from 'src/games/entities/game.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { default: 0 })
  gameTime: number;

  @Column()
  userId: string;

  @Column()
  gameId: string;

  @ManyToOne((type) => User, (user) => user.userGames)
  user: User;

  @OneToOne(() => Game, { cascade: true, primary: true })
  @JoinColumn()
  game: Game;
}
