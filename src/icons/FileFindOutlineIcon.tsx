import React, { FC, memo } from 'react';
import FileFindOutlineSvg from '../svg/file-find-outline.svg';

export interface IFileFindOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileFindOutlineIcon: FC<IFileFindOutlineIconProps> = memo(props => {
  return <FileFindOutlineSvg {...props} />;
});
