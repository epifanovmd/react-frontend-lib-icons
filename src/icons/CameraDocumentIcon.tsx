import React, { FC, memo } from 'react';
import CameraDocumentSvg from '../svg/camera-document.svg';

export interface ICameraDocumentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraDocumentIcon: FC<ICameraDocumentIconProps> = memo(props => {
  return <CameraDocumentSvg {...props} />;
});
