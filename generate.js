import fs from "fs";
import path from "path";
import { promisify } from "util";
import pkg from "lodash";
const { template, camelCase, upperFirst } = pkg;

const generateIcons = () => {
  const reactIcons = path.dirname("src/icons/icons/");
  const svgIcons = path.dirname("src/svg/svg/");

  fs.rm(reactIcons, { recursive: true, force: true }, async err => {
    if (err) {
      console.log("err", err);

      return null;
    }

    try {
      await promisify(fs.access)(reactIcons);
    } catch (err) {
      await promisify(fs.mkdir)(reactIcons);
    }

    // получение всех файлов
    fs.readdir(svgIcons, (err, files) => {
      if (err) {
        return Promise.resolve(err);
      }

      const exportReactIcons = files.map(_name => {
        const name = `${upperFirst(camelCase(_name.split(".")[0]))}Icon`;

        return `\nexport { ${name} } from "./${name}";`;
      });

      // создать экспорты всех реакт иконок index.ts
      fs.writeFile(
        `${reactIcons}/index.ts`,
        `${`${exportReactIcons
          .toString()
          .replace(/(,|\[|\])/g, "")}`.trim()}\n`,
        {},
        err => {
          if (err) {
            console.log("err", err);
          }
        },
      );

      const render = template(
        `${`
import React, { FC, memo } from 'react';
import <%= component %> from '../svg/<%= path %>.svg';

export interface I<%= name %>Props
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const <%= name %>: FC<I<%= name %>Props> = memo(props => {
  return <<%= component %> {...props} />;
});

`.trim()}\n`,
      );

      files.forEach(_fileName => {
        const fileName = _fileName.split(".")[0];

        if (fileName) {
          const component = upperFirst(camelCase(fileName.replace(/-/g, " ")));

          fs.writeFile(
            `${reactIcons}/${component}Icon.tsx`,
            render({
              path: fileName,
              component: `${component}Svg`,
              name: `${component}Icon`,
            }),
            {},
            err => {
              if (err) {
                console.log("err", err);
              }
            },
          );
        }
      });

      return null;
    });

    return null;
  });
};

generateIcons();
