import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post(':id')
  create(@Param('id') gamechatroomId: string, @Query('search') name: string) {
    console.log(gamechatroomId, name);
    return this.gameService.create(name, gamechatroomId);
  }

  @Get('rawg')
  findAllFromApiAndSave() {
    return this.gameService.findAllFromApiAndSave();
  }

  @Get('rawg/genres')
  getGamesForAllGenres() {
    return this.gameService.getGamesForAllGenres();
  }

  @Get('db')
  findAllFromDB() {
    return this.gameService.findAllFromDB();
  }

  @Get(':id')
  findOne(@Param('id') apiId: string) {
    return this.gameService.uploadOne(+apiId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(+id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(+id);
  }
}
