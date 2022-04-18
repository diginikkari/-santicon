import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { NxCreateReactNativeModuleGeneratorSchema } from './schema';
import { Linter } from '@nrwl/linter';

describe('nx-create-react-native-module generator', () => {
  let appTree: Tree;
  const options: NxCreateReactNativeModuleGeneratorSchema = {
    name: 'MyNativeModule',
    authorEmail: 'first.last@email.com',
    authorName: 'First Last',
    authorUrl: 'https://www.example.com',
    languages: 'ts',
    type: 'native',
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
    publishable: false,
    buildable: true,
    globalCss: true,
    strict: true,
    setParserOptionsProject: true,
    skipFormat: false,
    skipTsConfig: false,
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
    appTree.write('.gitignore', '');
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'MyNativeModule');
    expect(config).toBeDefined();
  });
});
