import React, { FC, memo } from 'react';
import UploadOffSvg from '../svg/upload-off.svg';

export interface IUploadOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadOffIcon: FC<IUploadOffIconProps> = memo(props => {
  return <UploadOffSvg {...props} />;
});
