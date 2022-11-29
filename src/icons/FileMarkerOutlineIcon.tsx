import React, { FC, memo } from 'react';
import FileMarkerOutlineSvg from '../svg/file-marker-outline.svg';

export interface IFileMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMarkerOutlineIcon: FC<IFileMarkerOutlineIconProps> = memo(props => {
  return <FileMarkerOutlineSvg {...props} />;
});
