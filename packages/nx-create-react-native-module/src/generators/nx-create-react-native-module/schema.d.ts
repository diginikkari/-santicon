import { Schema } from '@nrwl/react-native/src/generators/library/schema';

/**
 * Same as the @nrwl/react library schema, except it removes keys: style, component, routing, appProject
 */
export interface NxCreateReactNativeModuleGeneratorSchema extends Schema {
  authorName: string;
  authorEmail: string;
  authorUrl: string;
  description?: string;
  languages: 'cpp' | 'kotlin-objc' | 'kotlin-swift' | 'java-swift';
  type: 'view' | 'library' | 'module-legacy' | 'module-turbo' | 'module-mixed';
}
