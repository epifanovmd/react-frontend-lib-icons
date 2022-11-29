import React, { FC, memo } from 'react';
import FileFindSvg from '../svg/file-find.svg';

export interface IFileFindIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileFindIcon: FC<IFileFindIconProps> = memo(props => {
  return <FileFindSvg {...props} />;
});
