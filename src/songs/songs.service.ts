import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  //local db
  //local array

  private readonly songs = [];

  create(song) {
    // save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    //fetch all songs from the database
    return this.songs;
  }
}
