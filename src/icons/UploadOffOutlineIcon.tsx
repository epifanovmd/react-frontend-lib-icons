import React, { FC, memo } from 'react';
import UploadOffOutlineSvg from '../svg/upload-off-outline.svg';

export interface IUploadOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadOffOutlineIcon: FC<IUploadOffOutlineIconProps> = memo(props => {
  return <UploadOffOutlineSvg {...props} />;
});
