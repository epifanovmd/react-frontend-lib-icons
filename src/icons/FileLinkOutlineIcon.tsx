import React, { FC, memo } from 'react';
import FileLinkOutlineSvg from '../svg/file-link-outline.svg';

export interface IFileLinkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileLinkOutlineIcon: FC<IFileLinkOutlineIconProps> = memo(props => {
  return <FileLinkOutlineSvg {...props} />;
});
