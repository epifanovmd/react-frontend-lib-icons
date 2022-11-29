import React, { FC, memo } from 'react';
import DropboxSvg from '../svg/dropbox.svg';

export interface IDropboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DropboxIcon: FC<IDropboxIconProps> = memo(props => {
  return <DropboxSvg {...props} />;
});
