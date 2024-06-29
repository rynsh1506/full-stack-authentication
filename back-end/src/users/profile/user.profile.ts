import { createMap, Mapper, typeConverter } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { GetUserDto } from '../dto/get-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        User,
        GetUserDto,
        typeConverter(Date, String, (date) =>
          date != null ? date.toISOString() : null,
        ),
      );
      createMap(
        mapper,
        CreateUserDto,
        User,
        typeConverter(Date, String, (date) =>
          date != null ? date.toISOString() : null,
        ),
      );
      createMap(
        mapper,
        UpdateUserDto,
        User,
        typeConverter(Date, String, (date) =>
          date != null ? date.toISOString() : null,
        ),
      );
    };
  }
}
