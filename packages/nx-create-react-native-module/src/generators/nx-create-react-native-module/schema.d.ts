import { Linter } from '@nrwl/linter';

/**
 * Same as the @nrwl/react library schema, except it removes keys: style, component, routing, appProject
 */
export interface NxCreateReactNativeModuleGeneratorSchema {
  name: string;
  authorName: string;
  authorEmail: string;
  authorUrl: string;
  slug?: string;
  description?: string;
  languages: string;
  type: string;
  directory?: string;
  directory?: string;
  skipTsConfig: boolean;
  skipFormat: boolean;
  tags?: string;
  pascalCaseFiles?: boolean;
  unitTestRunner: 'jest' | 'none';
  linter: Linter;
  publishable?: boolean;
  buildable?: boolean;
  importPath?: string;
  js?: boolean;
  globalCss?: boolean;
  strict?: boolean;
  setParserOptionsProject?: boolean;
}
