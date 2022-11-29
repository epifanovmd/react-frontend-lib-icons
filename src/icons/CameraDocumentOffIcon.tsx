import React, { FC, memo } from 'react';
import CameraDocumentOffSvg from '../svg/camera-document-off.svg';

export interface ICameraDocumentOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraDocumentOffIcon: FC<ICameraDocumentOffIconProps> = memo(props => {
  return <CameraDocumentOffSvg {...props} />;
});
