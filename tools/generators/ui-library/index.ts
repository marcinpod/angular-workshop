import { Tree } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from '@nrwl/tao/src/commands/ngcli-adapter';

interface UiLibraryGeneratorModel {
  name: string;
  directory: string;
  componentName: string;
}

export default async function(tree: Tree, schema: UiLibraryGeneratorModel) {

  const libraryGenerator = wrapAngularDevkitSchematic(
    '@nrwl/angular',
    'lib'
  );

  const componentGenerator = wrapAngularDevkitSchematic(
    '@schematics/angular',
    'component'
  );

  await libraryGenerator(
    tree,
    {
      name: schema.name,
      directory: schema.directory,
      prefix: `${schema.directory.split('/').join('-')}`,
      strict: false
    }
  );

  await componentGenerator(
    tree,
    {
      name: schema.componentName,
      project: `${schema.directory.split('/').join('-')}-${schema.componentName}`,
      module: `${schema.directory.split('/').join('-')}-${schema.componentName}`,
      export: true,
      style: 'scss'
    }
  );
}
