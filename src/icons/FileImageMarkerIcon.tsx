import React, { FC, memo } from 'react';
import FileImageMarkerSvg from '../svg/file-image-marker.svg';

export interface IFileImageMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImageMarkerIcon: FC<IFileImageMarkerIconProps> = memo(props => {
  return <FileImageMarkerSvg {...props} />;
});
