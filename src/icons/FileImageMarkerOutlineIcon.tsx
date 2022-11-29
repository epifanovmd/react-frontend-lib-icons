import React, { FC, memo } from 'react';
import FileImageMarkerOutlineSvg from '../svg/file-image-marker-outline.svg';

export interface IFileImageMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageMarkerOutlineIcon: FC<IFileImageMarkerOutlineIconProps> = memo(props => {
  return <FileImageMarkerOutlineSvg {...props} />;
});
