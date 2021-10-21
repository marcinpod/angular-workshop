# 💻 Lab 4 - Generator ui-library

## 🏋️‍♀️ Lista kroków:

1. **Utwórz generator**

   ```shell
   nx generate @nrwl/workspace:workspace-generator ui-library
   ```

2. **Zmodyfikuj pola `properties` i `required` w pliku `schema.json` w katalogu `tools/generators/ui-library`**

   ```json
    "properties": {
      "name": {
        "type": "string",
        "description": "Library name",
        "$default": {
          "$source": "argv",
          "index": 0
        }
      },
      "componentName": {
        "type": "string",
        "description": "Component name"
      },
      "directory": {
        "type": "string",
        "description": "directory"
      }
    },
    "required": ["name", "componentName", "directory"]
   ```

3. **Uzupełnij kod generatora w pliku `index.ts` w katalogu `tools/generators/ui-library`**

   ```typescript
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
   ```
