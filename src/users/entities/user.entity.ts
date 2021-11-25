import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserGame } from './userGames.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => UserGame, (userGame) => userGame.user, { cascade: true })
  userGames: UserGame[];
}
