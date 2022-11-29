import React, { FC, memo } from 'react';
import FileJpgBoxSvg from '../svg/file-jpg-box.svg';

export interface IFileJpgBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileJpgBoxIcon: FC<IFileJpgBoxIconProps> = memo(props => {
  return <FileJpgBoxSvg {...props} />;
});
