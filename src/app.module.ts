import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CollaboraitorsModule } from './collaboraitors/collaboraitors.module';
import { CommonModule } from './common/common.module';
import { ProjectsModule } from './projects/projects.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { FilesModule } from './files/files.module';
import { CommonModule } from './common/common.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, CollaboratorsModule, FilesModule, CommonModule, ProjectsModule, CollaboraitorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
