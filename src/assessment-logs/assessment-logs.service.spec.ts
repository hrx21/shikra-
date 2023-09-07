import { Test, TestingModule } from '@nestjs/testing';
import { AssessmentLogsService } from './assessment-logs.service';

describe('AssessmentLogsService', () => {
  let service: AssessmentLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssessmentLogsService],
    }).compile();

    service = module.get<AssessmentLogsService>(AssessmentLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
