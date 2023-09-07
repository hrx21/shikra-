import { Test, TestingModule } from '@nestjs/testing';
import { AssessmentLogsController } from './assessment-logs.controller';
import { AssessmentLogsService } from './assessment-logs.service';

describe('AssessmentLogsController', () => {
  let controller: AssessmentLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssessmentLogsController],
      providers: [AssessmentLogsService],
    }).compile();

    controller = module.get<AssessmentLogsController>(AssessmentLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
