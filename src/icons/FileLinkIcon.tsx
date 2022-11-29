import React, { FC, memo } from 'react';
import FileLinkSvg from '../svg/file-link.svg';

export interface IFileLinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileLinkIcon: FC<IFileLinkIconProps> = memo(props => {
  return <FileLinkSvg {...props} />;
});
